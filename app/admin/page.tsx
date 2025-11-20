"use client"

import * as React from "react"
import { useRouter } from 'next/navigation'
import { LogOut, FileText, ImageIcon, Sparkles } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"

export default function AdminDashboard() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSaving, setIsSaving] = React.useState(false)

  // Content state
  const [heroTitle, setHeroTitle] = React.useState("Premium, conversion-first websites—designed and launched fast.")
  const [heroSubtitle, setHeroSubtitle] = React.useState("Strategy, design, and build—so you go live with confidence.")
  const [pricingBlurb, setPricingBlurb] = React.useState("Transparent pricing. Fast timelines. Premium polish.")
  
  // Easter egg state
  const [easterEggEnabled, setEasterEggEnabled] = React.useState(false)
  const [secretMessage, setSecretMessage] = React.useState("You found the secret!")

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  async function handleSave() {
    setIsSaving(true)
    
    // Simulate save operation
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Changes saved",
      description: "Your updates have been saved successfully.",
    })
    
    setIsSaving(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50">
        <div className="container flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8 px-4">
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList>
            <TabsTrigger value="content">
              <FileText className="mr-2 h-4 w-4" />
              Content Editor
            </TabsTrigger>
            <TabsTrigger value="images">
              <ImageIcon className="mr-2 h-4 w-4" />
              Image Manager
            </TabsTrigger>
            <TabsTrigger value="easter-eggs">
              <Sparkles className="mr-2 h-4 w-4" />
              Easter Eggs
            </TabsTrigger>
          </TabsList>

          {/* Content Editor Tab */}
          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>Edit the main hero text on the homepage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="hero-title">Hero Title</Label>
                  <Textarea
                    id="hero-title"
                    value={heroTitle}
                    onChange={(e) => setHeroTitle(e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
                  <Textarea
                    id="hero-subtitle"
                    value={heroSubtitle}
                    onChange={(e) => setHeroSubtitle(e.target.value)}
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pricing Page</CardTitle>
                <CardDescription>Edit pricing page headline</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pricing-blurb">Pricing Headline</Label>
                  <Input
                    id="pricing-blurb"
                    value={pricingBlurb}
                    onChange={(e) => setPricingBlurb(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Referral Links</CardTitle>
                <CardDescription>Manage referral link descriptions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Referral link management coming soon. You can edit descriptions directly in the code for now.
                </p>
              </CardContent>
            </Card>

            <Button onClick={handleSave} disabled={isSaving} size="lg">
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </TabsContent>

          {/* Image Manager Tab */}
          <TabsContent value="images" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Image Upload</CardTitle>
                <CardDescription>Upload and manage images for your site</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
                  <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Image upload functionality coming soon
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For now, you can add images directly to the /public folder
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Images</CardTitle>
                <CardDescription>View and manage uploaded images</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square rounded-lg bg-muted flex items-center justify-center">
                      <ImageIcon className="h-8 w-8 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Easter Eggs Tab */}
          <TabsContent value="easter-eggs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Secret Messages</CardTitle>
                <CardDescription>Add hidden messages and animations for visitors to discover</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="easter-egg-toggle">Enable Easter Egg</Label>
                    <p className="text-sm text-muted-foreground">
                      Show a secret message when users press Ctrl+Shift+E
                    </p>
                  </div>
                  <Switch
                    id="easter-egg-toggle"
                    checked={easterEggEnabled}
                    onCheckedChange={setEasterEggEnabled}
                  />
                </div>
                
                {easterEggEnabled && (
                  <div className="space-y-2">
                    <Label htmlFor="secret-message">Secret Message</Label>
                    <Input
                      id="secret-message"
                      value={secretMessage}
                      onChange={(e) => setSecretMessage(e.target.value)}
                      placeholder="Enter your secret message..."
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hidden Animations</CardTitle>
                <CardDescription>Toggle special animations and effects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Confetti on Logo Click</Label>
                    <p className="text-sm text-muted-foreground">
                      Trigger confetti animation when clicking the logo 5 times
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Konami Code</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable special theme when Konami code is entered
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Button onClick={handleSave} disabled={isSaving} size="lg">
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
