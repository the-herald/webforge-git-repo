"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "TechSaaS Platform",
    category: "SaaS Website",
    image: "/05_homepage_featuredwork_desktop-mobile-mockup1.png",
  },
  {
    title: "Modern Architecture",
    category: "Portfolio",
    image: "/06_homepage_featuredwork_desktop-mobile-mockup2.png",
  },
  {
    title: "EcoStore E-commerce",
    category: "E-commerce",
    image: "/07_homepage_featuredwork_desktop-mobile-mockup3.png",
  },
]

export function FeaturedWork() {
  return (
    <section className="bg-black py-20 md:py-28 border-t border-white/10">
      <div className="container px-4 md:px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Featured Work</h2>
            <p className="mt-6 max-w-[600px] text-gray-400 text-base">
              A selection of recent projects delivered with precision and style.
            </p>
          </div>
          <Button variant="outline" className="hidden md:inline-flex" asChild>
            <Link href="/portfolio">
              <span className="text-primary">View All Projects</span> <ArrowRight className="ml-2 h-4 w-4 text-primary" />
            </Link>
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden border-0 bg-transparent">
                  <CardContent className="p-0">
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute bottom-0 left-0 p-6 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                        <p className="text-sm font-medium text-primary">{project.category}</p>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-end gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
        
        <div className="mt-8 md:hidden">
          <Button variant="link" className="w-full text-primary" asChild>
            <Link href="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
