import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ScrollToTop } from "@/components/scroll-to-top"
import { NewsletterPopup } from "@/components/newsletter-popup"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
})

const sora = Sora({ 
  subsets: ["latin"], 
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: 'WebForge - Premium Web Design Services',
  description: 'Strategy, design, and build—so you go live with confidence.',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        <ScrollToTop />
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <NewsletterPopup />
        <Analytics />
      </body>
    </html>
  )
}
