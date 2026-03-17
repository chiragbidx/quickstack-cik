import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HOME_CONTENT } from "@/content/home"

const { services } = HOME_CONTENT

export default function LayoutServicesSection() {
  return (
    <section className="py-24 bg-background" id="layout-services">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-2 text-4xl font-bold">{services.heading}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{services.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {services.services.map((item) => (
            <Card key={item.title} className="shadow-md p-6">
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
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