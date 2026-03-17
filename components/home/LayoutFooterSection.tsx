import { ChevronsDownIcon } from "lucide-react"
import Link from "next/link"
import { HOME_CONTENT } from "@/content/home"

const copyright = "© 2024 FlowCRM. All rights reserved."

export default function LayoutFooterSection() {
  return (
    <footer className="w-full py-10 flex flex-col items-center bg-muted/30">
      <div className="flex justify-center items-center gap-2">
        <Link href="/" className="font-bold text-lg text-primary">
          FlowCRM
        </Link>
        <span className="ml-2 text-muted-foreground text-sm">{copyright}</span>
        <ChevronsDownIcon className="ml-2" />
      </div>
      <div className="flex gap-6 mt-6">
        <Link href="mailto:hi@chirag.co" target="_blank" className="underline text-muted-foreground">Contact</Link>
        <Link href="https://github.com" target="_blank" className="underline text-muted-foreground">GitHub</Link>
        <Link href="https://x.com" target="_blank" className="underline text-muted-foreground">X</Link>
      </div>
    </footer>
  )
}