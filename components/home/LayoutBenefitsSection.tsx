import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"
import { HOME_CONTENT } from "@/content/home"

const { benefits } = HOME_CONTENT

export default function LayoutBenefitsSection() {
  return (
    <section className="py-24 bg-background" id="layout-benefits">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-2 text-4xl font-bold">{benefits.heading}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{benefits.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {benefits.benefits.map((item) => (
            <Card key={item.title} className="shadow-md p-6">
              <CardHeader>
                <Icon name={item.icon} className="w-8 h-8 text-primary" />
                <CardTitle className="text-xl pt-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}