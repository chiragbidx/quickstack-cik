import { Icon } from "@/components/ui/icon"
import { HOME_CONTENT } from "@/content/home"

const { features, sponsors } = HOME_CONTENT

export default function LayoutSponsorsSection() {
  return (
    <section
      className="w-full bg-muted/50 py-10 flex flex-col items-center justify-center"
      id="layout-sponsors"
    >
      <div className="w-full max-w-4xl mx-auto text-center mb-8">
        <h2 className="font-semibold text-lg uppercase text-muted-foreground tracking-wider">
          {sponsors.heading}
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-7">
        {sponsors.items.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 px-6 py-2 rounded-lg bg-background/80 border shadow group transition"
          >
            <Icon name={item.icon} className="w-6 h-6 text-muted-foreground" />
            <span className="font-medium text-base">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}