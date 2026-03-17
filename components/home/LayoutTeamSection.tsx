import Image from "next/image"
import { HOME_CONTENT } from "@/content/home"

const { team } = HOME_CONTENT

export default function LayoutTeamSection() {
  return (
    <section id="layout-team" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="mb-2 text-4xl font-bold">Our Team</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {team.map((member) => (
          <div key={member.name} className="w-64 bg-muted rounded shadow p-6 flex flex-col items-center">
            <Image src={member.image} alt={member.name} width={80} height={80} className="rounded-full mb-3" />
            <h4 className="font-bold text-lg">{member.name}</h4>
            <span className="text-muted-foreground text-sm">{member.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}