import { getAuthSession } from "@/lib/auth/session"
import { db } from "@/lib/db/client"
import { contacts } from "@/lib/db/schema"
import ContactsClient from "./client"

export const dynamic = "force-dynamic"

export default async function ContactsPage() {
  const session = await getAuthSession()
  if (!session?.userId) {
    // Should never hit because of dashboard layout guard, but double check
    return null
  }

  // Load contacts for the user's team(s)
  const teamMember = await db.query.teamMembers.findFirst({
    where: (tm, { eq }) => eq(tm.userId, session.userId),
    with: { team: true },
  })

  if (!teamMember) {
    return <div className="p-8">You aren&#39;t a member of any team.</div>
  }

  const teamId = teamMember.team.id

  const items = await db.query.contacts.findMany({
    where: (c, { eq }) => eq(c.teamId, teamId),
    orderBy: (c, o) => o.desc(c.createdAt),
  })

  return (
    <ContactsClient
      teamId={teamId}
      items={items}
      isOwnerOrAdmin={["owner", "admin"].includes(teamMember.role)}
    />
  )
}