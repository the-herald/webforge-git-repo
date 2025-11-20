"use client"

import * as React from "react"
import { Mail, MessageSquare, Clock } from 'lucide-react'
import Image from "next/image"

import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Mail,
    image: "/36_contact_form_icon-envelope.png",
    title: "Email",
    description: "hello@webforge.com",
    detail: "Response within 24 hours"
  },
  {
    icon: MessageSquare,
    title: "Fiverr",
    description: "Direct messaging available",
    detail: "Fastest response time"
  },
  {
    icon: Clock,
    title: "Availability",
    description: "Mon-Fri, 9AM-6PM EST",
    detail: "Weekend inquiries welcome"
  }
]

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="container py-20 text-center relative">
        <div className="absolute inset-0 z-0 opacity-10">
           <Image src="/35_contact_hero_hands-typing-laptop.png" alt="Contact Hero" fill className="object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-background/80 backdrop-blur-sm">
            Let's <span className="text-primary">Work Together</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground bg-background/60 backdrop-blur-sm p-4 rounded-xl">
            Have a project in mind? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container pb-12">
        <div className="grid gap-6 md:grid-cols-3">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-border/50 bg-card/50">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {info.image ? (
                    <div className="relative h-8 w-8">
                      <Image src={info.image || "/placeholder.svg"} alt={info.title} fill className="object-contain" />
                    </div>
                  ) : (
                    <info.icon className="h-6 w-6" />
                  )}
                </div>
                <h3 className="font-bold mb-1">{info.title}</h3>
                <p className="text-muted-foreground mb-1">{info.description}</p>
                <p className="text-sm text-muted-foreground">{info.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container pb-20">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Footer Image Section */}
      <section className="w-full h-64 relative mt-auto">
         <Image src="/37_contact_footer_cityscape-silhouette.png" alt="Cityscape" fill className="object-cover object-bottom" />
      </section>
    </div>
  )
}
