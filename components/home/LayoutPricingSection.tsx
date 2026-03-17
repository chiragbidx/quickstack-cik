import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { HOME_CONTENT } from "@/content/home"

const { pricing } = HOME_CONTENT

export default function LayoutPricingSection() {
  return (
    <section className="py-24 bg-muted/10" id="layout-pricing">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-2 text-4xl font-bold">Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{/* Add pricing intro if needed */}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-centers mt-10">
          {pricing.map((plan) => (
            <Card key={plan.name} className="shadow-md p-6 w-full md:w-1/2 flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <span className="font-bold text-3xl pt-2">{plan.price}</span>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <ul className="mb-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 py-1">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="inline-block px-6 py-2 rounded bg-primary text-white font-semibold">
                  {plan.cta}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}