import Image from "next/image"
import Link from "next/link"
import { Code, Figma, Zap, Clock, Target, Award } from "lucide-react"
import { ContactForm } from "@/components/contact-form" // Import the ContactForm component

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const tools = [
  { name: "Figma", description: "Design & Prototyping", icon: Figma },
  { name: "Next.js / React", description: "Frontend Development", icon: Code },
  { name: "Tailwind / SCSS", description: "Styling & Design Systems", icon: Zap },
]

const values = [
  {
    title: "Outcome-Driven",
    description:
      "Every design decision is made with your business goals in mind. We don't just make things look good—we make them work.",
    icon: Target,
  },
  {
    title: "Fast Delivery",
    description: "Time is money. We deliver premium websites in days, not months, without compromising on quality.",
    icon: Clock,
  },
  {
    title: "Premium Polish",
    description:
      "Attention to detail matters. From typography to transitions, we sweat the small stuff so you don't have to.",
    icon: Award,
  },
]

const timeline = [
  { phase: "Discovery", duration: "1-2 days", description: "We learn about your business, goals, and audience." },
  { phase: "Design", duration: "2-4 days", description: "We create high-fidelity mockups and get your approval." },
  { phase: "Build", duration: "3-7 days", description: "We develop your site with clean code and best practices." },
  { phase: "Launch", duration: "1 day", description: "We test, optimize, and deploy your new website." },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 heading-bordered">
              Building websites that <span className="text-primary">drive results</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              I'm a web designer and developer specializing in fast, conversion-focused websites for small businesses
              and startups.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With years of experience in both design and development, I understand what it takes to create websites
              that not only look great but actually help your business grow.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Let's Work Together</Link>
            </Button>
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden bg-muted">
            <Image src="/32_about_hero_abstract-tech-background.png" alt="About" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 heading-bordered">My Approach</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="container py-20 md:py-28">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-4 heading-bordered">The Process</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto subheading-bordered mt-8">
          A proven workflow that delivers results on time, every time.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold">{step.phase}</h3>
                  <p className="text-sm text-muted-foreground">{step.duration}</p>
                </div>
              </div>
              <p className="text-muted-foreground pl-14">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 heading-bordered">
            Tools & Technologies
          </h2>

          <div className="relative h-24 w-full max-w-4xl mx-auto mb-12">
            <Image src="/34_about_toolset_logos.png" alt="Tools" fill className="object-contain" />
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl border border-border/50 bg-background"
              >
                <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
                  <tool.icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
            Plus: EmailJS, Resend, Vercel, Git, and more. I use the right tool for each project.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <div className="rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 p-8 md:p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Let's build something great</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're launching a new business or refreshing an existing site, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
