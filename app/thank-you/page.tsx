"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from 'lucide-react'

export default function ThankYouPage() {
  
  const handleClose = () => {
    // Attempt to close the window/tab
    window.close()
    // Fallback if script didn't open the window
    if (!window.closed) {
      alert("Browser security prevented closing the tab. Please close it manually.")
    }
  }

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center bg-black">
      <div className="mb-8 rounded-full bg-primary/10 p-6 ring-1 ring-primary/20 animate-in zoom-in duration-500">
        <CheckCircle className="h-20 w-20 text-primary" />
      </div>
      
      <h1 className="mb-6 font-display text-5xl font-bold tracking-tight text-white md:text-6xl">
        Thank You!
      </h1>
      
      <p className="mb-10 max-w-md text-xl text-gray-400">
        Your submission has been received. We'll be in touch with you shortly.
      </p>
      
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link href="/">
          <Button size="lg" className="min-w-[180px] text-lg bg-primary hover:bg-primary/90 text-white">
            Back to Home
          </Button>
        </Link>
        
        <Button 
          variant="outline" 
          size="lg" 
          onClick={handleClose}
          className="min-w-[180px] text-lg border-primary text-primary hover:bg-primary/10"
        >
          Close Tab
        </Button>
      </div>
    </div>
  )
}
