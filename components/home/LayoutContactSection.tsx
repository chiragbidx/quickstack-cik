import { Input } from "@/components/ui/input"
import { HOME_CONTENT } from "@/content/home"

const { contact } = HOME_CONTENT

export default function LayoutContactSection() {
  return (
    <section id="layout-contact" className="py-16 bg-background">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">{contact.headline}</h2>
        <p className="mb-6 text-center text-muted-foreground">{contact.description}</p>
        <form
          className="flex flex-col gap-4 p-4 rounded shadow bg-muted"
          action={`mailto:hi@chirag.co`}
          method="POST"
          encType="text/plain"
        >
          <Input required name="name" placeholder="Your Full Name" />
          <Input required type="email" name="email" placeholder="Your Email" />
          <Input name="subject" placeholder="Subject" />
          <Input as="textarea" name="message" placeholder="Your Message" rows={4} className="resize-none" />
          <button className="mt-2 px-6 py-2 rounded bg-primary text-white font-semibold" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}