import { Search, PenTool, Rocket } from 'lucide-react'

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We dive deep into your goals, audience, and brand to build a solid strategy.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description: "We craft high-fidelity visuals and interactive prototypes for your approval.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Launch",
    description: "We build, test, and deploy your site, ensuring it's fast, secure, and SEO-ready.",
    icon: Rocket,
  },
]

export function ProcessSection() {
  return (
    <section className="container py-20 md:py-28">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">How We Work</h2>
        <p className="mt-4 text-lg text-secondary">Simple, transparent, and effective.</p>
      </div>

      <div className="relative grid gap-8 md:grid-cols-3">
        {/* Connecting Line (Desktop) */}
        <div className="absolute top-12 left-0 hidden h-0.5 w-full bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 md:block" />

        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center text-center group">
            <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_rgba(6,160,199,0.5)]">
              <step.icon className="h-10 w-10" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-primary">{step.title}</h3>
            <p className="max-w-xs text-gray-400">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
