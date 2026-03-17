"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LayoutDashboardIcon, Users2Icon, SettingsIcon } from "lucide-react"

const navItems = [
  {
    href: "/dashboard",
    label: "Overview",
    icon: LayoutDashboardIcon,
  },
  {
    href: "/dashboard/contacts",
    label: "Contacts",
    icon: Users2Icon,
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
    icon: SettingsIcon,
  },
]

export default function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-1 py-6">
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors",
            pathname === href
              ? "bg-primary/10 text-primary"
              : "hover:bg-muted text-muted-foreground"
          )}
        >
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  )
}