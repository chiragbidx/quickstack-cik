import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { HOME_CONTENT } from "@/content/home"

const { navbar } = HOME_CONTENT

export default function Navbar() {
  return (
    <header className="sticky top-0 left-0 w-full z-30 border-b bg-background/90 backdrop-blur">
      <nav className="flex min-h-[68px] max-w-screen-2xl mx-auto items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold text-lg text-primary"
            aria-label={navbar.brandName}
          >
            <Image src="/hero-image-light.jpeg" alt={navbar.brandName} width={36} height={36} className="rounded" />
            <span>{navbar.brandName}</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navbar.routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-base hover:text-primary underline-offset-2 font-medium transition"
            >
              {route.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/auth#signin"
            className="font-semibold text-base px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 transition ml-2"
          >
            {navbar.signInLabel}
          </Link>
        </div>
      </nav>
    </header>
  )
}