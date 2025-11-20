import { Rocket, Palette, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const pillars = [
  {
    title: "Strategy-first",
    description: "We don't just design pretty pages. We build conversion engines tailored to your business goals.",
    icon: Target,
  },
  {
    title: "Design depth",
    description: "Premium aesthetics that elevate your brand perception and build trust with your audience.",
    icon: Palette,
  },
  {
    title: "Launch-ready",
    description: "From SEO basics to responsive testing, we handle the details so you can launch without worry.",
    icon: Rocket,
  },
]

export function ValuePillars() {
  return (
    <section className="container py-20 md:py-28">
      <div className="grid gap-8 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Card key={index} className="group relative overflow-hidden border-white/10 bg-white/5 transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_-10px_rgba(6,160,199,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader>
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <pillar.icon className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl text-primary">{pillar.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 text-base leading-relaxed">{pillar.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
