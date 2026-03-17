import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HOME_CONTENT } from "@/content/home"

const { faqs } = HOME_CONTENT

export default function LayoutFaqSection() {
  return (
    <section className="py-20 bg-muted/30" id="layout-faq">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="mb-2 text-4xl font-bold">FAQ</h2>
      </div>
      <Accordion type="single" collapsible className="max-w-2xl mx-auto">
        {faqs.map((item, i) => (
          <AccordionItem value={`faq-${i}`} key={i}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              <p>{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}