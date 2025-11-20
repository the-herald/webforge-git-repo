import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form" // Import ContactForm
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "How long does it take to build a website?",
        answer: "Timeline depends on the package you choose. Starter websites take about 5 days, Growth sites 5-10 days, and Premium projects 10-15 days. This includes design, development, revisions, and launch."
      },
      {
        question: "What information do you need from me to get started?",
        answer: "I'll need your brand assets (logo, colors, fonts if you have them), content (text and images), and a clear understanding of your goals. Don't worry if you don't have everything—I can help guide you through the process."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Currently, all projects are paid upfront through Fiverr. However, for larger custom projects, we can discuss milestone-based payments. Contact me directly to discuss options."
      }
    ]
  },
  {
    category: "Design & Development",
    questions: [
      {
        question: "How many revisions do I get?",
        answer: "Each package includes 2 rounds of revisions. This is typically more than enough for most projects. Additional revisions can be purchased if needed, but I work closely with you during the design phase to minimize the need for major changes."
      },
      {
        question: "Can I update the website myself after launch?",
        answer: "Yes! For Growth and Premium packages, I can integrate a CMS (Content Management System) that allows you to easily update text, images, and blog posts without any coding knowledge. I'll also provide training documentation."
      },
      {
        question: "Will my website work on mobile devices?",
        answer: "Absolutely. All websites are built mobile-first and fully responsive, meaning they'll look and work great on phones, tablets, and desktop computers. I test on multiple devices before launch."
      },
      {
        question: "What if I need help after the website launches?",
        answer: "I offer ongoing support and maintenance packages. For minor updates and questions, I'm always available via email. For larger updates or seasonal changes, check out the add-on services on the pricing page."
      }
    ]
  },
  {
    category: "Ownership & Hosting",
    questions: [
      {
        question: "Who owns the website after it's built?",
        answer: "You do! Once the project is complete and paid for, you own all the code, design files, and content. I'll transfer everything to you and help you set up hosting if needed."
      },
      {
        question: "Do you provide hosting?",
        answer: "I don't provide hosting directly, but I can recommend reliable hosting providers and help you set everything up. For most projects, I recommend Vercel or Netlify for their speed, security, and ease of use."
      },
      {
        question: "Can I move my website to a different host later?",
        answer: "Yes, absolutely. Since you own all the code, you can move your website to any hosting provider at any time. I build sites using standard technologies that work anywhere."
      }
    ]
  },
  {
    category: "Content & SEO",
    questions: [
      {
        question: "Do you write the content for my website?",
        answer: "Basic copywriting and content structuring is included in all packages. For more extensive content writing (multiple pages, blog posts, etc.), I offer content writing as an add-on service at $100 per page."
      },
      {
        question: "Will my website be optimized for search engines?",
        answer: "Yes! All websites include basic SEO setup: proper meta tags, semantic HTML, fast loading speeds, mobile optimization, and sitemap generation. For more advanced SEO strategies, we can discuss a custom plan."
      },
      {
        question: "Can you help me rank #1 on Google?",
        answer: "SEO is a long-term strategy that depends on many factors including content quality, backlinks, and competition. I'll build your site with SEO best practices, but ranking takes time and ongoing effort. I can recommend SEO specialists if you need advanced help."
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="container py-20 text-center relative">
        <div className="absolute top-10 right-10 w-32 h-32 opacity-20 animate-pulse">
           <Image src="/38_faq_hero_questionmark-gradient.png" alt="Question Mark" fill className="object-contain" />
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-muted-foreground mt-8">
          Everything you need to know about working with me. Can't find what you're looking for? Feel free to reach out.
        </p>
      </section>

      {/* FAQ Sections */}
      <section className="container pb-20">
        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-8 w-8">
                   <Image src="/39_faq_divider_icon-clock.png" alt="Icon" fill className="object-contain" />
                </div>
                <h2 className="text-2xl font-bold">{section.category}</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {section.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`${sectionIndex}-${faqIndex}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm here to help. Send me a message and I'll get back to you within 24 hours.
          </p>
          <div className="max-w-2xl mx-auto text-left">
             <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
