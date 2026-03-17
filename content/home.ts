export type HomeContent = {
  siteName: string
  tagline: string
  description: string
  heroHeading: string
  heroSubheading: string
  ctaPrimary: string
  ctaSecondary: string
  features: Array<{
    title: string
    description: string
    icon: string
  }>
  benefits: Array<{
    title: string
    description: string
    icon: string
  }>
  services: Array<{
    title: string
    description: string
    icon: string
  }>
  testimonials: Array<{
    name: string
    title: string
    text: string
    image: string
  }>
  team: Array<{
    name: string
    title: string
    image: string
  }>
  pricing: Array<{
    name: string
    price: string
    description: string
    features: string[]
    cta: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
  contact: {
    headline: string
    description: string
  }
}

export const HOME_CONTENT: HomeContent = {
  siteName: "FlowCRM",
  tagline: "Modern CRM Foundation",
  description:
    "FlowCRM is a robust Next.js SaaS starter kit, designed as your foundation for modern, production-grade internal CRM tools. Rapidly launch, customize, and scale CRM workflows with open-source efficiency and full control.",
  heroHeading: "A Rocket-Fast Modern CRM Starter",
  heroSubheading:
    "Launch internal CRM tools and production SaaS dashboards using FlowCRM, a Next.js 16 template with a real database, working authentication, email flows, and enterprise-grade extensibility.",
  ctaPrimary: "Get Started",
  ctaSecondary: "View Features",
  features: [
    {
      title: "Dev-Ready Starter Kit",
      description:
        "Includes Next.js 16, React 19, TypeScript 5, Drizzle ORM, PostgreSQL, shadcn/ui, and Tailwind, wired for instant deploys.",
      icon: "rocket",
    },
    {
      title: "Secure Authentication",
      description:
        "Full email/password sign up & sign in, email verification, password reset—all production-hardened from day one.",
      icon: "lock",
    },
    {
      title: "Extensible Dashboard",
      description:
        "Build CRM features your team needs: Contacts, Deals, Companies, and more with full CRUD, role-based access, and team multi-tenancy.",
      icon: "layout-dashboard",
    },
    {
      title: "Built-In Email Delivery",
      description:
        "SendGrid integration for verification, reset, and invites. Use your own domain and email settings.",
      icon: "mail",
    },
    {
      title: "Clean Public Landing Page",
      description:
        "Section-based homepage composition with modular benefits, testimonials, team, pricing, FAQ, and contact forms included.",
      icon: "globe",
    },
    {
      title: "Production Docker & Supervision",
      description:
        "Ships with a Dockerfile and supervised dev tooling for reliable, repeatable builds locally or in the cloud.",
      icon: "server",
    },
  ],
  benefits: [
    {
      title: "Accelerate Internal Tools",
      description:
        "From MVP to scale, FlowCRM gives both your engineers and operators a strong foundation for custom workflows.",
      icon: "zap",
    },
    {
      title: "No Vendor Lock-In",
      description:
        "Own your code, data, and stack. Deploy anywhere, from Vercel to Railway or self-managed cloud.",
      icon: "key",
    },
    {
      title: "Real, Not Demo",
      description:
        "With end-to-end DB, server actions, and live auth—no 'coming soon' placeholders or mock features.",
      icon: "check-circle",
    },
  ],
  services: [
    {
      title: "Custom CRM Flows",
      description: "Extend with contacts, deals, notes, companies, and more. Use our reference modules or create your own.",
      icon: "pencil",
    },
    {
      title: "User Management",
      description: "Invite and manage team members with owner, admin, and member roles. Control access per team.",
      icon: "users",
    },
    {
      title: "API Integration Ready",
      description: "Plug in messaging, payments, or embed OpenAI—FlowCRM is your extensible foundation.",
      icon: "plug",
    },
  ],
  testimonials: [
    {
      name: "Chirag Dodiya",
      title: "Founder & Engineer",
      text: "FlowCRM provided us with everything we needed to launch a secure and extensible internal CRM in days, not weeks. The authentication and team systems saved us months of work.",
      image: "/team1.jpg",
    },
  ],
  team: [
    {
      name: "Chirag Dodiya",
      title: "Founder",
      image: "/team1.jpg",
    },
  ],
  pricing: [
    {
      name: "Open Source",
      price: "$0",
      description: "Use FlowCRM as your base and customize as you grow. Self-host or deploy to your cloud.",
      features: [
        "MIT License",
        "Unlimited users and teams",
        "Full source code access",
        "Standard support",
      ],
      cta: "Start Free",
    },
    {
      name: "Commercial",
      price: "Contact",
      description: "Need help setting up, customizing, or have a project in mind? Reach out directly to Chirag Dodiya.",
      features: [
        "Custom feature development",
        "Deployment assistance",
        "Premium support",
      ],
      cta: "Contact Us",
    },
  ],
  faqs: [
    {
      question: "Who is FlowCRM for?",
      answer: "Teams, founders, and engineers who want a battle-tested, production-ready foundation for internal CRM tools or SaaS dashboards—with zero vendor lock-in.",
    },
    {
      question: "Can I use my own database?",
      answer: "Yes—FlowCRM is built for PostgreSQL by default and can be adapted to your DB stack.",
    },
    {
      question: "Does it work with Vercel/Railway?",
      answer: "Yes—deployments are optimized for Vercel (production) and Railway (development server), with Docker support included.",
    },
    {
      question: "What about authentication?",
      answer: "Production-grade email/password authentication, email verification, password reset, and multi-tenant teams are baked in.",
    },
    {
      question: "Is AI or OpenAI supported?",
      answer: "Yes—AI-assisted features are easy to layer in using the provided OpenAI wiring and API module.",
    },
  ],
  contact: {
    headline: "Contact Us",
    description: "Questions or partnership inquiries? Get in touch with Chirag Dodiya at hi@chirag.co.",
  },
}