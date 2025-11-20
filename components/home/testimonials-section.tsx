import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "The speed and quality of delivery was incredible. Our conversion rate doubled within a month of launching the new site.",
    author: "Sarah Jenkins",
    role: "CEO, TechStart",
    avatar: "/08_homepage_testimonials_avatar1.png",
  },
  {
    quote: "Finally a designer who understands business goals. The site looks amazing but more importantly, it works.",
    author: "Michael Chen",
    role: "Founder, GrowthLabs",
    avatar: "/09_homepage_testimonials_avatar2.png",
  },
  {
    quote: "Professional, responsive, and talented. The best investment we made for our brand this year.",
    author: "Emma Wilson",
    role: "Marketing Director, EcoLife",
    avatar: "/10_homepage_testimonials_avatar3.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-black py-20 md:py-28 border-t border-white/10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Client Success Stories
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6 flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mb-8 text-base text-gray-300 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-primary">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-primary text-sm">{testimonial.author}</p>
                    <p className="text-xs font-medium text-secondary">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
