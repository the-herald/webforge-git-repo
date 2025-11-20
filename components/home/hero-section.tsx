"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"

const heroImages = [
  "/01_homepage_hero_plumber-fixing-a-sink.png",
  "/02_homepage_hero_dentist-with-patient.png",
  "/03_homepage_hero_landscaper-trimming-hedges.png",
  "/04_homepage_hero_septic-truck-at-work.png",
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-background">
      {/* Background Carousel */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            className={`h-full w-full bg-cover bg-center transition-transform duration-[10000ms] ease-linear ${
              index === currentImage ? "scale-110" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center md:px-6">
        <h1 className="animate-fade-in-up max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-primary">Premium</span>, conversion-first websites—designed and launched <span className="text-secondary">fast</span>.
        </h1>
        <p className="animate-fade-in-up delay-100 mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
          Strategy, design, and build—so you go live with confidence. Stop waiting months for your new website.
        </p>
        <div className="animate-fade-in-up delay-200 mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="h-12 px-8" asChild>
            <Link href="https://www.fiverr.com/s/DBk5WyP" target="_blank" rel="noopener noreferrer">
              Buy on Fiverr <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8" asChild>
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
