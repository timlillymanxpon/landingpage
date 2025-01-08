'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex items-center justify-between p-6">
        <div className="text-2xl font-bold">v0 to Landing</div>
        <nav className="space-x-6">
          <Link href="#features" className="text-sm font-medium hover:text-gray-600">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-gray-600">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-gray-600">
            FAQs
          </Link>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Turn v0 Generations into Stunning Landing Pages</h1>
              <p className="text-xl mb-8 text-gray-600">
                Transform your Version 0 AI-generated content into polished, deployable landing pages with just a few clicks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#67a9f4] text-black hover:bg-[#5799e4] px-6 py-3 rounded-md border-2 border-gray-700">
                  Get Started
                </Button>
                <Button variant="outline" className="px-6 py-3 rounded-md border-2 border-gray-700">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <Card className="w-full max-w-[400px] lg:w-[400px] overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gray-200 p-4 flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-gray-300" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <div className="ml-4 text-sm font-medium">v0 to Landing</div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="bg-[#d7e8ff] text-black p-3 rounded-lg max-w-[80%] ml-auto">
                    I have a v0 generation, but it looks messy. How can I turn it into a real landing page?
                  </div>
                  <div className="bg-gray-200 text-black p-3 rounded-lg max-w-[80%]">
                    No problem! Just paste your v0 content, and we'll transform it into a clean, professional landing page.
                  </div>
                  <div className="bg-[#d7e8ff] text-black p-3 rounded-lg max-w-[80%] ml-auto">
                    Wow, that was fast! My landing page looks amazing now. 🎉
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="w-full h-px bg-gray-200" />

        <section id="features" className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">How v0 to Landing Works</h2>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
                <div className="flex-shrink-0 w-64 h-64 bg-gray-200 rounded-lg" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">Paste Your v0 Content</h3>
                  <p className="text-gray-600 mb-4">
                    Simply copy and paste your Version 0 AI-generated content into our editor.
                  </p>
                  <Link href="#" className="text-black font-medium hover:underline">
                    Learn more <ChevronRight className="inline w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8 md:space-x-reverse space-y-8 md:space-y-0">
                <div className="flex-shrink-0 w-64 h-64 bg-gray-200 rounded-lg" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">AI-Powered Cleanup</h3>
                  <p className="text-gray-600 mb-4">
                    Our AI analyzes and restructures your content, optimizing it for a landing page format.
                  </p>
                  <Link href="#" className="text-black font-medium hover:underline">
                    Learn more <ChevronRight className="inline w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
                <div className="flex-shrink-0 w-64 h-64 bg-gray-200 rounded-lg" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">Instant Deployment</h3>
                  <p className="text-gray-600 mb-4">
                    With one click, deploy your polished landing page and share it with the world.
                  </p>
                  <Link href="#" className="text-black font-medium hover:underline">
                    Learn more <ChevronRight className="inline w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gray-200" />

        <section id="pricing" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Simple, Transparent Pricing</h2>
            <Card className="max-w-sm mx-auto">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
                <p className="text-4xl font-bold mb-6">$9.99/month</p>
                <ul className="text-left mb-6 space-y-2">
                  <li>✓ Unlimited v0 to landing page conversions</li>
                  <li>✓ AI-powered content optimization</li>
                  <li>✓ One-click deployment</li>
                  <li>✓ Custom domain support</li>
                </ul>
                <Button className="w-full bg-[#67a9f4] text-black hover:bg-[#5799e4] border-2 border-gray-700">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="w-full h-px bg-gray-200" />

        <section id="faq" className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">What is a v0 generation?</h3>
                <p className="text-gray-600">
                  A v0 generation is the initial AI-generated content produced by tools like GPT-3 or GPT-4. It's often unstructured and needs refinement for use in a landing page.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How long does it take to create a landing page?</h3>
                <p className="text-gray-600">
                  With our tool, you can transform your v0 content into a polished landing page in just a few minutes. The AI-powered cleanup and structuring happen almost instantly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I customize the design of my landing page?</h3>
                <p className="text-gray-600">
                  Yes! While we provide a clean, professional template to start with, you can customize colors, fonts, and layout to match your brand identity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">v0 to Landing</div>
          <nav className="flex space-x-6">
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}