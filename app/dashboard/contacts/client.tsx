"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/table"
import { useState } from "react"
import { createContact, updateContact, deleteContact } from "./actions"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

type Contact = {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string | null
  company: string | null
  createdAt: string
}

type ContactsClientProps = {
  teamId: string
  items: Contact[]
  isOwnerOrAdmin: boolean
}

export default function ContactsClient({ teamId, items, isOwnerOrAdmin }: ContactsClientProps) {
  const [open, setOpen] = useState(false)
  const [editContact, setEditContact] = useState<Contact | null>(null)

  function onNew() {
    setEditContact(null)
    setOpen(true)
  }

  function onEdit(contact: Contact) {
    setEditContact(contact)
    setOpen(true)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData) as {
      firstName: string
      lastName: string
      email: string
      phone?: string
      company?: string
    }

    let result
    if (editContact) {
      result = await updateContact(editContact.id, data)
    } else {
      result = await createContact({ ...data, teamId })
    }
    if (result?.error) {
      toast({ variant: "destructive", title: "Error", description: result.error })
    } else {
      toast({ title: "Success", description: `Contact ${editContact ? "updated" : "created"}` })
      setOpen(false)
    }
  }

  async function handleDelete(id: string) {
    const ok = confirm("Are you sure you want to delete this contact?")
    if (ok) {
      const result = await deleteContact(id)
      if (result?.error) {
        toast({ variant: "destructive", title: "Error", description: result.error })
      }
    }
  }

  return (
    <div className="p-8">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Contacts</h2>
        {isOwnerOrAdmin && (
          <Button onClick={onNew}>Add Contact</Button>
        )}
      </div>
      <Table>
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Company</Th>
            <Th>Created</Th>
            {isOwnerOrAdmin && <Th>Actions</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {items.map(c => (
            <Tr key={c.id}>
              <Td>{c.firstName}</Td>
              <Td>{c.lastName}</Td>
              <Td>{c.email}</Td>
              <Td>{c.phone}</Td>
              <Td>{c.company}</Td>
              <Td>{new Date(c.createdAt).toLocaleDateString()}</Td>
              {isOwnerOrAdmin && (
                <Td>
                  <Button variant="outline" size="sm" onClick={() => onEdit(c)}>Edit</Button>
                  <Button variant="destructive" size="sm" className="ml-2" onClick={() => handleDelete(c.id)}>Delete</Button>
                </Td>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {/* Hidden, we toggle dialog via button above */}
          <div style={{ display: "none" }} />
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>{editContact ? "Edit Contact" : "Add Contact"}</DialogTitle>
          <form className="space-y-4 pt-2" onSubmit={handleSubmit}>
            <Input name="firstName" placeholder="First Name" required defaultValue={editContact?.firstName ?? ""} />
            <Input name="lastName" placeholder="Last Name" required defaultValue={editContact?.lastName ?? ""} />
            <Input name="email" placeholder="Email" type="email" required defaultValue={editContact?.email ?? ""} />
            <Input name="phone" placeholder="Phone" defaultValue={editContact?.phone ?? ""} />
            <Input name="company" placeholder="Company" defaultValue={editContact?.company ?? ""} />
            <div className="flex justify-end gap-2 pt-3">
              <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">{editContact ? "Update" : "Create"}</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}