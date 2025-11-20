"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Filter } from 'lucide-react'
import { ContactForm } from "@/components/contact-form"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const projects = [
  {
    id: 1,
    title: "TechSaaS Platform",
    category: "SaaS",
    type: "Landing",
    image: "/26_portfolio_grid_thumbnail-project1.png",
    description: "A modern SaaS landing page with conversion-focused design and interactive elements.",
    problem: "Client needed a professional landing page to convert trial users into paying customers.",
    approach: "Designed a clean, trust-building layout with social proof, clear CTAs, and benefit-focused messaging.",
    outcome: "42% increase in trial-to-paid conversion within 60 days of launch.",
    metrics: ["42% conversion lift", "2.1s load time", "95 PageSpeed score"],
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    tags: ["SaaS", "Landing Page", "Conversion"]
  },
  {
    id: 2,
    title: "Modern Architecture Portfolio",
    category: "Local",
    type: "Portfolio",
    image: "/27_portfolio_grid_thumbnail-project2.png",
    description: "Minimalist portfolio showcasing architectural projects with stunning imagery.",
    problem: "Architecture firm needed a portfolio that let their work speak for itself.",
    approach: "Created a minimal, image-first design with smooth transitions and intuitive navigation.",
    outcome: "Featured in design galleries, 3x increase in client inquiries.",
    metrics: ["3x inquiry increase", "1.8s load time", "100% mobile responsive"],
    tools: ["Next.js", "SCSS", "Lightbox"],
    tags: ["Portfolio", "Architecture", "Minimal"]
  },
  {
    id: 3,
    title: "EcoStore E-commerce",
    category: "E-commerce",
    type: "Marketing",
    image: "/28_portfolio_grid_thumbnail-project3.png",
    description: "Sustainable products e-commerce site with seamless checkout experience.",
    problem: "Eco-friendly brand needed an online store that matched their values and converted visitors.",
    approach: "Built a fast, accessible store with clear product information and streamlined checkout.",
    outcome: "28% increase in average order value, 15% reduction in cart abandonment.",
    metrics: ["28% AOV increase", "15% less abandonment", "A+ accessibility"],
    tools: ["Next.js", "Stripe", "Tailwind CSS"],
    tags: ["E-commerce", "Sustainability", "Conversion"]
  },
  {
    id: 4,
    title: "FinTech Mobile App Landing",
    category: "SaaS",
    type: "Landing",
    image: "/29_portfolio_case-hero-project1.png",
    description: "High-converting landing page for a mobile finance application.",
    problem: "FinTech startup needed to drive app downloads and build trust with potential users.",
    approach: "Designed a mobile-first landing page emphasizing security, ease of use, and social proof.",
    outcome: "5,000+ app downloads in first month, featured in App Store.",
    metrics: ["5K+ downloads", "38% click-through", "Featured in App Store"],
    tools: ["Next.js", "Tailwind CSS", "Analytics"],
    tags: ["FinTech", "Mobile", "Landing Page"]
  },
  {
    id: 5,
    title: "Local HVAC Services",
    category: "Local",
    type: "Marketing",
    image: "/30_portfolio_case-closeup-component1.png",
    description: "Lead-generation website for local HVAC contractor.",
    problem: "HVAC company relied on word-of-mouth and needed online visibility.",
    approach: "Built an SEO-optimized site with clear service pages, testimonials, and easy contact options.",
    outcome: "Ranked #1 for 'HVAC services [city]' within 3 months, 50+ leads per month.",
    metrics: ["#1 local ranking", "50+ leads/month", "4.8s avg. session"],
    tools: ["Next.js", "Local SEO", "EmailJS"],
    tags: ["Local Business", "SEO", "Lead Gen"]
  },
  {
    id: 6,
    title: "Dental Practice Rebrand",
    category: "Local",
    type: "Rebrand",
    image: "/31_portfolio_case-closeup-component2.png",
    description: "Complete website redesign for established dental practice.",
    problem: "Outdated website didn't reflect the modern, patient-focused practice.",
    approach: "Created a warm, welcoming design with online booking and patient resources.",
    outcome: "35% increase in new patient bookings, improved online reputation.",
    metrics: ["35% booking increase", "4.9★ reviews", "Mobile-first design"],
    tools: ["Next.js", "Booking API", "Tailwind CSS"],
    tags: ["Healthcare", "Rebrand", "Local"]
  }
]

const categories = ["All", "SaaS", "Local", "E-commerce"]
const types = ["All", "Landing", "Marketing", "Portfolio", "Rebrand"]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [selectedType, setSelectedType] = React.useState("All")
  const [selectedProject, setSelectedProject] = React.useState<typeof projects[0] | null>(null)

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesType = selectedType === "All" || project.type === selectedType
    return matchesCategory && matchesType
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="container py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 heading-bordered">
          Our <span className="text-primary">Portfolio</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-muted-foreground mt-8 subheading-bordered">
          Real projects. Real results. See how we've helped businesses grow online.
        </p>
      </section>

      {/* Filters */}
      <section className="container pb-12">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {types.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted mb-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 p-6 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                      <Badge className="mb-2">{project.category}</Badge>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  <DialogDescription className="text-base">{project.description}</DialogDescription>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">The Challenge</h4>
                    <p className="text-muted-foreground">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">Our Approach</h4>
                    <p className="text-muted-foreground">{project.approach}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">The Outcome</h4>
                    <p className="text-muted-foreground mb-4">{project.outcome}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, i) => (
                        <Badge key={i} variant="secondary">{metric}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <Badge key={i} variant="outline">{tool}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to see your project here?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's build something amazing together. Get started with a free consultation.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container py-20">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Start Your Project Today</h2>
          <p className="text-muted-foreground">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
