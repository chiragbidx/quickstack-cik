import { HOME_CONTENT } from "@/content/home"

const { testimonials } = HOME_CONTENT

export default function LayoutTestimonialSection() {
  return (
    <section id="layout-testimonials" className="py-20 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{testimonials.length > 0 && "What our users say"}</h2>
        {!!testimonials.length && (
          <div className="flex flex-col items-center">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="border-l-4 border-primary pl-6 pr-2 py-4 mb-8 bg-background rounded shadow max-w-2xl"
              >
                <p className="italic text-lg text-muted-foreground mb-2">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full" />
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-xs text-muted-foreground">, {t.title}</span>
                </div>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}