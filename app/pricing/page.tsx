import Link from "next/link"
import { Check, HelpCircle, ArrowRight } from 'lucide-react'
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const pricingTiers = [
  {
    name: "Starter Website",
    price: "$499",
    image: "/21_pricing_tier_starter-laptop-mockup.png",
    timeline: "5 days",
    scope: "Up to 5 pages",
    description: "Perfect for small businesses and personal portfolios.",
    features: [
      "Custom Design",
      "Mobile Responsive",
      "Contact Form",
      "Basic SEO",
      "Social Links"
    ],
    cta: "Buy on Fiverr",
    link: "https://www.fiverr.com/s/DBk5WyP"
  },
  {
    name: "Growth Website",
    price: "$999",
    image: "/22_pricing_tier_growth-multi-device-mockup.png",
    timeline: "5–10 days",
    scope: "6–12 pages",
    description: "Ideal for growing businesses needing more content.",
    features: [
      "Everything in Starter",
      "CMS Integration",
      "Blog Setup",
      "Advanced SEO",
      "Seasonal Module",
      "Analytics Setup"
    ],
    cta: "Buy on Fiverr",
    link: "https://www.fiverr.com/s/DBk5WyP",
    popular: true
  },
  {
    name: "Premium Website",
    price: "$1,499",
    image: "/23_pricing_tier_premium-designer-workspace.png",
    timeline: "10–15 days",
    scope: "12+ pages",
    description: "Full-scale solution with advanced functionality.",
    features: [
      "Everything in Growth",
      "Custom Animations",
      "Multiple Modules",
      "Hidden Admin Page",
      "Priority Support",
      "Speed Optimization"
    ],
    cta: "Buy on Fiverr",
    link: "https://www.fiverr.com/s/DBk5WyP"
  }
]

const addOns = [
  {
    name: "Seasonal/Flash Update",
    price: "$149",
    image: "/24_pricing_addon_calendar-seasonal-update.png",
    unit: "per update",
    description: "We'll update your site with seasonal promotions or flash sales."
  },
  {
    name: "Spam Protection",
    price: "$99",
    image: "/25_pricing_addon_shield-spam-protection.png",
    unit: "one-time",
    description: "Advanced honeypot and captcha integration for your forms."
  },
  {
    name: "Content Writing",
    price: "$100",
    image: "/40_faq_divider_icon-document.png", // Reusing document icon
    unit: "per page",
    description: "Professional copywriting optimized for SEO and conversion."
  }
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="container py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">
          <span className="text-primary">Transparent Pricing</span>. <br className="hidden sm:inline" />
          Fast Timelines. <span className="text-secondary">Premium Polish</span>.
        </h1>
        <p className="mt-8 text-xl text-muted-foreground">
          No hidden fees. No surprises. Just high-quality web development delivered on time.
        </p>
      </section>

      {/* Pricing Cards (Mobile/Tablet) & Table (Desktop) */}
      <section className="container pb-20">
        {/* Desktop Table View */}
        <div className="hidden lg:block rounded-xl border border-border overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[200px] text-lg font-bold">Tier</TableHead>
                <TableHead className="text-lg font-bold">Timeline</TableHead>
                <TableHead className="text-lg font-bold">Scope</TableHead>
                <TableHead className="text-lg font-bold">Price</TableHead>
                <TableHead className="text-right text-lg font-bold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingTiers.map((tier) => (
                <TableRow key={tier.name} className="hover:bg-muted/30">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 rounded overflow-hidden bg-muted">
                        <Image src={tier.image || "/placeholder.svg"} alt={tier.name} fill className="object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-bold">{tier.name}</span>
                        <span className="text-sm text-muted-foreground">{tier.description}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-base">{tier.timeline}</TableCell>
                  <TableCell className="text-base">{tier.scope}</TableCell>
                  <TableCell className="text-xl font-bold text-primary">{tier.price}</TableCell>
                  <TableCell className="text-right">
                    <Button asChild size="lg" variant={tier.popular ? "default" : "outline"}>
                      <Link href={tier.link} target="_blank" rel="noopener noreferrer">
                        {tier.cta}
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile/Tablet Card View */}
        <div className="grid gap-8 lg:hidden md:grid-cols-2">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col rounded-xl border bg-card overflow-hidden shadow-sm ${
                tier.popular ? 'border-primary shadow-primary/10' : 'border-border'
              }`}
            >
              <div className="relative h-48 w-full bg-muted">
                <Image src={tier.image || "/placeholder.svg"} alt={tier.name} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                {tier.popular && (
                  <div className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground z-10">
                    Most Popular
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  <p className="text-muted-foreground">{tier.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-sm text-muted-foreground"> / project</span>
                </div>
                <div className="mb-6 space-y-2 text-sm">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Timeline</span>
                    <span className="font-medium">{tier.timeline}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Scope</span>
                    <span className="font-medium">{tier.scope}</span>
                  </div>
                </div>
                <ul className="mb-8 space-y-3 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" size="lg" variant={tier.popular ? "default" : "outline"}>
                  <Link href={tier.link} target="_blank" rel="noopener noreferrer">
                    {tier.cta}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center text-primary">Optional Add-ons</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {addOns.map((addon, index) => (
              <div key={index} className="flex flex-col rounded-lg border border-border/50 bg-background p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10">
                      <Image src={addon.image || "/placeholder.svg"} alt={addon.name} fill className="object-contain" />
                    </div>
                    <h3 className="font-bold">{addon.name}</h3>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{addon.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="mt-auto pt-4">
                  <span className="text-2xl font-bold text-primary">{addon.price}</span>
                  <span className="text-sm text-muted-foreground"> {addon.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="container py-20 text-center">
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { title: "Fast Timelines", desc: "Launch in days, not months" },
            { title: "Competitive Pricing", desc: "Premium quality, fair rates" },
            { title: "Local Focus", desc: "Optimized for local markets" },
            { title: "SEO Included", desc: "Built to rank from day one" }
          ].map((item, i) => (
            <div key={i} className="p-4">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Ready to launch your site?</h2>
          <Button size="lg" className="h-14 px-10 text-lg" asChild>
            <Link href="https://www.fiverr.com/s/DBk5WyP" target="_blank" rel="noopener noreferrer">
              Start Your Project on Fiverr
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
