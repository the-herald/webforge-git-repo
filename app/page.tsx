import { HeroSection } from "@/components/home/hero-section"
import { ValuePillars } from "@/components/home/value-pillars"
import { FeaturedWork } from "@/components/home/featured-work"
import { ProcessSection } from "@/components/home/process-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ValuePillars />
      <FeaturedWork />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
