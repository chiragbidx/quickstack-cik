"use server"

import { z } from "zod"
import { db } from "@/lib/db/client"
import { contacts } from "@/lib/db/schema"
import { revalidatePath } from "next/cache"
import { getAuthSession } from "@/lib/auth/session"

const ContactSchema = z.object({
  teamId: z.string(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  company: z.string().optional().nullable(),
})

export async function createContact(input: any) {
  const session = await getAuthSession()
  if (!session?.userId) return { error: "Not authenticated" }

  const data = ContactSchema.parse(input)

  // Only team members can create
  const tm = await db.query.teamMembers.findFirst({
    where: (tm, { eq }) => eq(tm.userId, session.userId) && eq(tm.teamId, data.teamId),
  })
  if (!tm) return { error: "Invalid team" }
  // Only admin/owner can create contacts
  if (!["admin", "owner"].includes(tm.role)) return { error: "No permission" }

  const inserted = await db.insert(contacts).values({
    ...data,
  }).returning()
  revalidatePath("/dashboard/contacts")
  return { contact: inserted[0] }
}

export async function updateContact(id: string, input: any) {
  const session = await getAuthSession()
  if (!session?.userId) return { error: "Not authenticated" }
  const data = ContactSchema.omit({ teamId: true }).parse(input)
  // Only team members can update their team's contacts
  const contact = await db.query.contacts.findFirst({
    where: (c, { eq }) => eq(c.id, id),
  })
  if (!contact) return { error: "Contact not found" }

  const tm = await db.query.teamMembers.findFirst({
    where: (tm, { eq }) => eq(tm.userId, session.userId) && eq(tm.teamId, contact.teamId),
  })
  if (!tm) return { error: "Invalid team" }
  // Only admin/owner can update
  if (!["admin", "owner"].includes(tm.role)) return { error: "No permission" }

  await db.update(contacts).set({ ...data }).where((c, { eq }) => eq(c.id, id))
  revalidatePath("/dashboard/contacts")
  return { success: true }
}

export async function deleteContact(id: string) {
  const session = await getAuthSession()
  if (!session?.userId) return { error: "Not authenticated" }

  // Only team members can delete their team's contacts
  const contact = await db.query.contacts.findFirst({
    where: (c, { eq }) => eq(c.id, id),
  })
  if (!contact) return { error: "Contact not found" }

  const tm = await db.query.teamMembers.findFirst({
    where: (tm, { eq }) => eq(tm.userId, session.userId) && eq(tm.teamId, contact.teamId),
  })
  if (!tm) return { error: "Invalid team" }
  // Only admin/owner can delete
  if (!["admin", "owner"].includes(tm.role)) return { error: "No permission" }

  await db.delete(contacts).where((c, { eq }) => eq(c.id, id))
  revalidatePath("/dashboard/contacts")
  return { success: true }
}