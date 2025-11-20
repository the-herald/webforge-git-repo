"use client"

import { useState, useEffect } from "react"
import { X } from 'lucide-react'
import { ContactForm } from "@/components/contact-form"

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup every 5 minutes (300000 ms)
    const interval = setInterval(() => {
      setIsOpen(true)
    }, 300000)

    // Also show it once after 30 seconds for first-time visitors
    const initialTimer = setTimeout(() => {
      if (!sessionStorage.getItem("popupSeen")) {
        setIsOpen(true)
        sessionStorage.setItem("popupSeen", "true")
      }
    }, 30000)

    return () => {
      clearInterval(interval)
      clearTimeout(initialTimer)
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl rounded-xl bg-black p-8 border-2 border-primary shadow-[0_0_40px_-10px_rgba(6,160,199,0.5)]">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary">Let's Build Something Great</h3>
            <p className="text-gray-300 text-lg mt-2">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>
          
          <ContactForm compact />
        </div>
      </div>
    </div>
  )
}
