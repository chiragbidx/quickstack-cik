"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { HOME_CONTENT } from "@/content/home"
import Link from "next/link"
import Image from "next/image"

export default function LayoutHeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-blue-100/20 to-background" />
      </div>
      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-br from-blue-800 via-blue-500 to-blue-400 bg-clip-text text-transparent">
          {HOME_CONTENT.heroHeading}
        </h1>
        <p className="text-xl font-medium text-muted-foreground mb-8">
          {HOME_CONTENT.heroSubheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="font-semibold text-lg px-8">
            <Link href="/auth">{HOME_CONTENT.ctaPrimary}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-semibold text-lg px-8">
            <Link href="#layout-features">{HOME_CONTENT.ctaSecondary}</Link>
          </Button>
        </div>
        <div className="w-full flex flex-col items-center mt-10">
          <Image
            src="/hero-image-light.jpeg"
            alt="FlowCRM App Preview"
            width={900}
            height={420}
            priority
            className="rounded-2xl shadow-xl ring-1 ring-muted/20"
          />
        </div>
      </div>
    </section>
  )
}