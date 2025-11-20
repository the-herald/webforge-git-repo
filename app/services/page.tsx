import Link from "next/link"
import Image from "next/image"
import { Check, ArrowRight, Layout, Smartphone, Search, Mail, Zap, Shield } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
  {
    title: "Web Essentials",
    description: "Perfect for small businesses needing a professional online presence fast.",
    icon: Layout,
    image: "/11_services_tier_starter-local-storefront.png",
    features: [
      "Custom Design System",
      "Up to 5 Pages",
      "Mobile Responsive",
      "Contact Form Integration",
      "Basic SEO Setup",
      "1 Week Turnaround",
    ],
  },
  {
    title: "Growth Site",
    description: "Designed for businesses ready to scale with more content and features.",
    icon: Zap,
    image: "/12_services_tier_growth-team-collaboration.png",
    features: [
      "Everything in Essentials",
      "6-12 Pages",
      "CMS Integration",
      "Blog / News Section",
      "Advanced SEO Structure",
      "Social Media Integration",
      "2 Week Turnaround",
    ],
  },
  {
    title: "Premium Custom",
    description: "A fully tailored solution with advanced functionality and polish.",
    icon: Smartphone,
    image: "/13_services_tier_premium-designer-workstation.png",
    features: [
      "Everything in Growth",
      "12+ Pages",
      "Custom Animations",
      "Advanced Integrations",
      "Seasonal Offer Modules",
      "Hidden Admin Dashboard",
      "Priority Support",
    ],
  },
]

const features = [
  {
    title: "Responsive Development",
    description: "Your site will look and work perfectly on all devices, from mobile phones to large desktop screens.",
    icon: Smartphone,
    image: "/16_services_featuregrid_icon-responsive.png",
  },
  {
    title: "SEO Optimization",
    description: "Built with search engines in mind, including meta tags, semantic HTML, and fast loading speeds.",
    icon: Search,
    image: "/18_services_featuregrid_icon-seo.png",
  },
  {
    title: "Contact Integration",
    description: "Secure contact forms connected directly to your email, with spam protection included.",
    icon: Mail,
    image: "/17_services_featuregrid_icon-contactform.png",
  },
  {
    title: "Security First",
    description: "SSL certificates, secure headers, and best practices to keep your site and users safe.",
    icon: Shield,
    image: "/20_services_featuregrid_icon-spam-protection.png",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container py-20 md:py-28 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 heading-bordered">
          Services Tailored to <span className="text-primary">Your Growth</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-10 subheading-bordered mt-8">
          From simple landing pages to complex business platforms, we build solutions that drive results.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/pricing">View Pricing</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio">See Our Work</Link>
          </Button>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 transition-all hover:border-primary/50 hover:shadow-lg overflow-hidden"
              >
                <div className="relative h-48 w-full bg-muted">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Grid */}
      <section className="container py-20 md:py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl heading-bordered">
            Included in Every Project
          </h2>
          <p className="mt-4 text-muted-foreground">Standard features that ensure quality and performance.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-border/50 bg-card/30"
            >
              <div className="mb-4 h-16 w-16 relative">
                <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-contain" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 p-8 md:p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the package that fits your needs and let's build something amazing together.
          </p>
          <Button size="lg" asChild>
            <Link href="/pricing">
              Check Pricing <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
