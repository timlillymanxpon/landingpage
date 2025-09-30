'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Inter } from 'next/font/google'
import Image from 'next/image'
import CallFormModal from '@/components/CallFormModal'
import { useState } from 'react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <div className={`flex flex-col min-h-screen bg-white text-gray-900 ${inter.className}`}>
      {/* Navigation */}
      <header className="flex items-center gap-6 py-8 px-8 border-b border-gray-100">
        <Link href="/" className={`text-2xl font-bold text-gray-900 ${inter.className}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">TL</div>
            <span>Tim Lillyman</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          <Link href="#help" className="text-gray-600 hover:text-accent transition-colors">Services</Link>
          <Link href="#approach" className="text-gray-600 hover:text-accent transition-colors">Process</Link>
          <Link href="#agents" className="text-gray-600 hover:text-accent transition-colors">Results</Link>
          <Link href="#about" className="text-gray-600 hover:text-accent transition-colors">About</Link>
        </nav>
        <Button onClick={openModal} className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg shadow-soft hover:scale-105 transition-all duration-300 text-base font-medium">
          Book a Call
        </Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                             <div>
                 <h1 className={`text-6xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 ${inter.className}`}>
                   I Build AI Agents & Automation That Actually Move the Needle for Your Business
                 </h1>
                 <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                   I partner with forward-thinking leaders to design AI agents and intelligent automation that don't just handle repetitive tasks—they transform how your entire operation runs.
                 </p>
                
                 <Button size="lg" className="bg-accent hover:bg-accent-dark text-white text-lg px-10 py-5 rounded-lg shadow-soft hover:shadow-soft-hover hover:scale-105 transition-all duration-300 font-medium">
                   Book a call with me.
                 </Button>
               </div>
              
                             {/* Hero Image with Floating Cards */}
               <div className="relative">

                 {/* Main Headshot Container */}
                 <div className="relative max-w-md mx-auto">
                   <Image
                     src="/images/Tim new Headshot.png"
                     alt="Tim Lillyman - Marketing and AI Expert"
                     width={448}
                     height={448}
                     className="w-full h-auto shadow-soft rounded-lg"
                     priority
                   />
                   
                   {/* Floating Cards */}
                   <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-soft border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                     <div className="text-center">
                       <div className="text-xl mb-2">👨‍💼</div>
                       <p className="font-medium text-sm text-gray-900">Tim Lillyman</p>
                       <p className="text-xs text-gray-500">AI Automation Expert</p>
                     </div>
                   </div>
                   
                   <div className="absolute top-1/2 -right-8 bg-white rounded-lg p-3 shadow-soft border border-gray-100 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                     <div className="text-center">
                       <div className="text-xl mb-1">🤖</div>
                       <p className="font-medium text-xs text-gray-900">50+ Agents</p>
                       <p className="text-xs text-gray-500">Implemented</p>
                     </div>
                   </div>
                   
                   <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-soft border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                     <div className="text-center">
                       <div className="text-2xl mb-2">⏰</div>
                       <p className="font-medium text-sm text-gray-900">8 Years</p>
                       <p className="text-xs text-gray-500">Marketing & Tech</p>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

                 {/* Personal Story Section */}
         <section className="py-24 px-8 bg-premium-light">
           <div className="max-w-7xl mx-auto">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="bg-premium-light rounded-2xl p-4 shadow-soft">
                 <div className="relative rounded-xl overflow-hidden h-[420px]">
                   <Image
                     src="/images/tim-presentation.jpg"
                     alt="Tim Lillyman presenting on AI maturity"
                     fill
                     className="object-cover"
                     sizes="(min-width: 1024px) 40vw, 100vw"
                     priority
                   />
                 </div>
               </div>
               
               <div>
                                 <h2 className={`text-4xl font-bold mb-6 text-gray-900 ${inter.className}`}>
                    Why I Specialise in AI Agents & Automation (And Why Most Fail)
                  </h2>
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      After watching countless businesses waste millions on AI tools that promised the world but delivered complexity, I decided to focus exclusively on one thing: building AI agents and intelligent automation systems that actually integrate with how real businesses operate.
                    </p>
                    <p>
                      My approach is different. Instead of starting with the technology, I start with your processes. I spend time understanding your workflows, your bottlenecks, and your goals. Then I build AI agents and automation that feel like a natural extension of your operations—not another system to fight with.
                    </p>
                  </div>
                 
               </div>
             </div>
           </div>
         </section>

        {/* My Approach Section */}
        <section id="approach" className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                                <h2 className={`text-4xl font-bold mb-6 text-gray-900 ${inter.className}`}>
                   My 4-Phase AI Implementation Method
                 </h2>
                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                   Here's exactly how I work with clients to build AI agents and automation systems that deliver results:
                 </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                             <div className="text-center relative">
                 <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
                 <h3 className="text-xl font-bold mb-4 text-gray-900">Listen First</h3>
                 <p className="text-gray-600 italic mb-4">
                   I take time to understand current processes and daily frustrations, identifying what's slowing your team down and the opportunity lies.
                 </p>
                 <div className="hidden lg:block absolute top-8 right-0 w-px h-32 bg-gray-200"></div>
               </div>
              
                             <div className="text-center relative">
                 <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
                                  <h3 className="text-xl font-bold mb-4 text-gray-900">Design for Your Reality</h3>
                  <p className="text-gray-600 italic mb-4">
                    No cookie-cutter solutions. Agents and automation workflows that work with your existing tools, processes, and team dynamics.
                  </p>
                  <div className="hidden lg:block absolute top-8 right-0 w-px h-32 bg-gray-200"></div>
               </div>
              
                             <div className="text-center relative">
                 <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
                                  <h3 className="text-xl font-bold mb-4 text-gray-900">Build and Test Obsessively</h3>
                  <p className="text-gray-600 italic mb-4">
                    No deploy-and-disappear approach. Hands-on involvement until your agents and automation are performing exactly as promised.
                  </p>
                  <div className="hidden lg:block absolute top-8 right-0 w-px h-32 bg-gray-200"></div>
               </div>
              
                             <div className="text-center relative">
                 <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">4</div>
                                  <h3 className="text-xl font-bold mb-4 text-gray-900">Optimise for Growth</h3>
                  <p className="text-gray-600 italic mb-4">
                    As your business evolves, your agents and automation evolve with you. Ongoing refinement ensures they keep delivering value.
                  </p>
               </div>
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-24 px-8 bg-premium-light">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold mb-6 text-gray-900 ${inter.className}`}>
                What Others Say
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-premium-light rounded-2xl p-8 shadow-soft relative">
                <div className="absolute top-6 left-6 text-4xl text-accent/30 font-serif">"</div>
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="/images/Leadership-Chris_Rozic-modified.png"
                    alt="Chris Rozic"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-lg text-gray-900">Chris Rozic</h3>
                    <p className="text-gray-500">Chief Growth Officer at XPON</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 text-lg italic mb-6">
                  "Tim has been a genuine force multiplier for our entire Go-to-Market function. His pioneering work in AI and automation has, and continues to deliver, tangible, bottom-line results for XPON. We've specifically seen a huge impact on our Sales team, with each rep saving over 15 hours of their time each week thanks to the AI systems Tim has built."
                </blockquote>
              </div>

              <div className="bg-premium-light rounded-2xl p-8 shadow-soft relative">
                <div className="absolute top-6 left-6 text-4xl text-accent/30 font-serif">"</div>
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="/images/Louise-Cummins-media-photo-modified.png"
                    alt="Louise Cummins"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-lg text-gray-900">Louise Cummins</h3>
                    <p className="text-gray-500">Co-Founder of Australian Centre for AI in Marketing</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 text-lg italic mb-6">
                  "In the rapidly evolving landscape of AI in marketing, it is critical to identify the next generation of leaders who can navigate the complexity. Tim Lillyman is undoubtedly one of those leaders. Through the events and conversations I have hosted with Tim, I've been consistently impressed. He pairs a forward-thinking, strategic vision with the crucial, hands-on technical knowledge required to execute on it."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agents in Action */}
        <section id="agents" className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold mb-6 text-gray-900 ${inter.className}`}>
                Real AI Agents I've Built for Real Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Here are just six examples of AI agents I've successfully implemented for clients across different industries. Each one integrates seamlessly with existing processes and delivers measurable improvements in efficiency and outcomes.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Content Generation Agent */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-soft border border-gray-100 transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1 h-full">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent/5 pointer-events-none"/>
                <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110">💬</div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">Content Generation Agent</h3>
                <div className="text-gray-600 space-y-3 text-sm">
                  <div>
                    <p className="font-medium">What It Does</p>
                    <p>Automatically creates blog posts, social media content, email campaigns, and marketing materials based on your brand guidelines and target audience.</p>
                  </div>
                  <div>
                    <p className="font-medium">Real Impact</p>
                    <p className="italic">“Reduced content creation time from 8 hours to 30 minutes per piece whilst maintaining brand consistency across all channels.”</p>
                  </div>
                  <div>
                    <p className="font-medium">Perfect For</p>
                    <p>Marketing teams, agencies, and content-heavy businesses</p>
                  </div>
                </div>
              </div>

              {/* Lead Management Agent */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-soft border border-gray-100 transition-all duration-300 hover:shadow-soft-hover hover:translate-y-[-4px] h-full">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent/5 pointer-events-none"/>
                <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110">🎯</div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">Lead Management Agent</h3>
                <div className="text-gray-600 space-y-3 text-sm">
                  <div>
                    <p className="font-medium">What It Does</p>
                    <p>Intelligently qualifies, scores, and routes leads through your sales funnel, ensuring no opportunities slip through the cracks.</p>
                  </div>
                  <div>
                    <p className="font-medium">Real Impact</p>
                    <p className="italic">“Increased lead qualification accuracy by 85% and reduced response time from 4 hours to 2 minutes.”</p>
                  </div>
                  <div>
                    <p className="font-medium">Perfect For</p>
                    <p>Sales teams with high lead volumes and complex qualification criteria</p>
                  </div>
                </div>
              </div>

              {/* Proposal & SOW Agent */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-soft border border-gray-100 transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1 h-full">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent/5 pointer-events-none"/>
                <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110">📋</div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">Proposal and SOW Agent</h3>
                <div className="text-gray-600 space-y-3 text-sm">
                  <div>
                    <p className="font-medium">What It Does</p>
                    <p>Generates customised proposals, statements of work, and contracts based on client conversations, requirements, and your service offerings.</p>
                  </div>
                  <div>
                    <p className="font-medium">Real Impact</p>
                    <p className="italic">“Cut proposal creation time from 3 days to 45 minutes whilst increasing win rates by 23% through better personalisation.”</p>
                  </div>
                  <div>
                    <p className="font-medium">Perfect For</p>
                    <p>Service businesses, consultancies, and agencies</p>
                  </div>
                </div>
              </div>

              {/* Sales Coaching Agent */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-soft border border-gray-100 transition-all duration-300 hover:shadow-soft-hover hover:translate-y-[-4px] h-full">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent/5 pointer-events-none"/>
                <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110">🏆</div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">Sales Coaching Agent</h3>
                <div className="text-gray-600 space-y-3 text-sm">
                  <div>
                    <p className="font-medium">What It Does</p>
                    <p>Analyses sales calls, provides real-time feedback, and offers personalised coaching recommendations to improve performance.</p>
                  </div>
                  <div>
                    <p className="font-medium">Real Impact</p>
                    <p className="italic">“Improved average deal closure rates by 34% and reduced onboarding time for new sales reps from 6 months to 8 weeks.”</p>
                  </div>
                  <div>
                    <p className="font-medium">Perfect For</p>
                    <p>Sales organisations focused on continuous improvement and team development</p>
                  </div>
                </div>
              </div>

              {/* Prospecting Agent */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-soft border border-gray-100 transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1 h-full">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent/5 pointer-events-none"/>
                <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110">🔍</div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">Prospecting Agent</h3>
                <div className="text-gray-600 space-y-3 text-sm">
                  <div>
                    <p className="font-medium">What It Does</p>
                    <p>Researches potential clients, identifies key decision makers, and crafts personalised outreach messages based on company insights and industry trends.</p>
                  </div>
                  <div>
                    <p className="font-medium">Real Impact</p>
                    <p className="italic">“Increased qualified meeting bookings by 67% whilst reducing prospecting time per lead from 45 minutes to 3 minutes.”</p>
                  </div>
                  <div>
                    <p className="font-medium">Perfect For</p>
                    <p>Business development teams and companies focused on scaling outbound sales</p>
                  </div>
                </div>
              </div>

              {/* Account Management Agent */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-soft border border-gray-100 transition-all duration-300 hover:shadow-soft-hover hover:translate-y-[-4px] h-full">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent/5 pointer-events-none"/>
                <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110">👥</div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">Account Management Agent</h3>
                <div className="text-gray-600 space-y-3 text-sm">
                  <div>
                    <p className="font-medium">What It Does</p>
                    <p>Monitors client health scores, identifies upsell opportunities, manages renewal timelines, and maintains ongoing client relationships.</p>
                  </div>
                  <div>
                    <p className="font-medium">Real Impact</p>
                    <p className="italic">“Reduced churn by 41% and increased account expansion revenue by 28% through proactive relationship management.”</p>
                  </div>
                  <div>
                    <p className="font-medium">Perfect For</p>
                    <p>SaaS companies, subscription businesses, and service providers with ongoing client relationships</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
                These are just six examples. Your business might need something completely different—and that's exactly what I specialise in: custom AI agents designed for your unique processes and challenges.
              </p>
              <Button asChild className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg shadow-soft">
                <Link href="#services">Book Your Strategy Session</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How I Can Help You */}
        <section id="help" className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold mb-6 text-gray-900 ${inter.className}`}>
                How I Can Help You
              </h2>
            </div>
            
                         <div className="grid lg:grid-cols-2 gap-12">
                               <div className="bg-premium-light rounded-2xl p-8 border-2 border-accent/20 shadow-soft">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular Choice</div>
                  </div>
                  <h3 className="text-2xl font-medium mb-4 text-gray-900">Hire Me As Your AI Expert</h3>
                  <p className="text-gray-700 mb-6">
                    Every business has unique automation needs. Rather than one-size-fits-all pricing, let's first understand exactly what you need, then provide transparent, fixed-price proposals.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">What's Included:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                        <span className="text-gray-700">Comprehensive needs analysis and strategy session</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                        <span className="text-gray-700">Custom AI agents and automation design & development</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                        <span className="text-gray-700">System integration and workflow optimisation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                        <span className="text-gray-700">Team training and support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                        <span className="text-gray-700">90-day performance guarantee</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                        <span className="text-gray-700">Ongoing optimisation and support</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">How Pricing Works:</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Discovery Session (Free):</strong> Understand your needs and challenges</p>
                      <p><strong>Proposal:</strong> Fixed-price quote based on your specific requirements</p>
                      <p><strong>Transparent Pricing:</strong> No surprises, no hidden costs</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent mb-2">Typical Investment Range: $3,000 - $30,000 AUD</p>
                    <p className="text-sm text-gray-600 mb-6">Depends on number of agents, complexity, and integrations</p>
                    <Button onClick={openModal} className="bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-lg shadow-soft">
                      Start with Free Discovery
                    </Button>
                  </div>
                </div>
               
               <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-soft">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Perfect for Getting Started</div>
                 </div>
                 <h3 className="text-2xl font-medium mb-4 text-gray-900">Start with a Strategy Session</h3>
                 <p className="text-gray-700 mb-6">
                   Not sure where to begin? Let's talk. I'll assess your situation, identify your best opportunities for AI agents and intelligent automation, and give you a clear roadmap—whether you work with me or not.
                 </p>
                 
                 <div className="mb-6">
                   <h4 className="font-medium text-gray-900 mb-3">What You Get:</h4>
                   <div className="space-y-3">
                     <div className="flex items-center gap-3">
                       <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                       <span className="text-gray-700">90-minute deep-dive session with Tim</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                       <span className="text-gray-700">Detailed AI and automation opportunity assessment</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                       <span className="text-gray-700">Custom implementation roadmap</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                       <span className="text-gray-700">ROI projections and timeline</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                       <span className="text-gray-700">Recommended next steps</span>
                     </div>
                   </div>
                 </div>
                 
                 <div className="text-center">
                   <p className="text-2xl font-bold text-accent mb-2">Investment: $500 AUD</p>
                   <p className="text-sm text-gray-600 mb-6">(credited toward full project if you proceed)</p>
                   <Button onClick={openModal} className="bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-lg shadow-soft">
                     Book Strategy Session
                   </Button>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* Why Work with Tim */}
        <section className="py-24 px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold mb-6 text-gray-900 ${inter.className}`}>
                Why Businesses Choose to Work with Me
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-8">🎯</div>
                                 <h3 className="text-xl font-medium mb-4 text-gray-900">I Only Do AI Agents & Automation</h3>
                 <p className="text-gray-700">
                   While other consultants dabble in everything AI, I focus exclusively on agents and intelligent automation. This means you get depth of expertise, not breadth of confusion.
                 </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-8">🤝</div>
                                 <h3 className="text-xl font-medium mb-4 text-gray-900">I Stay Hands-On</h3>
                 <p className="text-gray-700">
                   I don't build and disappear. I stay involved until your agents and automation systems are working perfectly and your team is confident using them.
                 </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-8">💬</div>
                                 <h3 className="text-xl font-medium mb-4 text-gray-900">I Speak Business, Not Tech</h3>
                 <p className="text-gray-700">
                   I translate complex AI and automation capabilities into clear business outcomes. You'll always understand exactly what we're building and why.
                 </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-8">✅</div>
                                 <h3 className="text-xl font-medium mb-4 text-gray-900">I Guarantee Results</h3>
                 <p className="text-gray-700">
                   If your AI agents and automation don't deliver measurable improvements within 90 days, I'll work with you until they do—at no additional cost. That's how confident I am in my approach.
                 </p>
              </div>
            </div>
          </div>
        </section>

        {/* A Recent Project */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                             <div>
                 <h2 className={`text-4xl font-bold mb-8 text-gray-900 ${inter.className}`}>
                   How I Helped XPON's Sales Team Save 60 Hours Per Month with Three AI Agents
                 </h2>
                 
                 <div className="space-y-6">
                   <div>
                     <h3 className="text-xl font-medium mb-3 text-accent">The Challenge</h3>
                     <p className="text-gray-700">
                       XPON's sales team was drowning in admin work. Prospecting research took hours, proposals took days, and reps struggled to improve their techniques.
                     </p>
                   </div>
                   
                   <div>
                     <h3 className="text-xl font-medium mb-3 text-accent">The Solution</h3>
                     <p className="text-gray-700 mb-4">
                       Over 3 months, I built and deployed three AI agents:
                     </p>
                     <div className="grid grid-cols-1 gap-4 text-sm">
                       <div className="bg-premium-light p-3 rounded">
                         <strong>Prospecting Agent:</strong> Cut research time from 3 hours to 20 minutes per lead
                       </div>
                       <div className="bg-premium-light p-3 rounded">
                         <strong>Proposal & SOW Agent:</strong> Reduced proposal time from 8-12 hours to 2 hours
                       </div>
                       <div className="bg-premium-light p-3 rounded">
                         <strong>Sales Coaching Agent:</strong> Provided real-time performance insights
                       </div>
                     </div>
                   </div>

                   <div>
                     <h3 className="text-xl font-medium mb-2 text-accent">The Results</h3>
                     <div className="grid grid-cols-2 gap-4">
                       <div className="text-center bg-green-50 p-4 rounded-lg">
                         <div className="text-2xl font-bold text-green-600">40hrs</div>
                         <div className="text-sm text-gray-600">Saved per month</div>
                       </div>
                       <div className="text-center bg-accent/10 p-4 rounded-lg">
                         <div className="text-2xl font-bold text-accent">$29k</div>
                         <div className="text-sm text-gray-600">Annualised productivity savings</div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

              <div className="bg-premium-light rounded-2xl p-8 shadow-soft">
                <div className="bg-white rounded-xl p-6 mb-6 shadow-soft">
                  <h4 className="font-medium mb-4 text-gray-900">AI Agent Interface Preview</h4>
                  <div className="bg-gray-50 rounded-lg h-48 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🤖</div>
                      <p className="text-gray-600">AI Agent Dashboard</p>
                    </div>
                        </div>
                      </div>
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <h4 className="font-medium mb-4 text-gray-900">Results Dashboard</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Calls Handled</span>
                      <span className="font-medium text-gray-900">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Response Time</span>
                      <span className="font-medium text-gray-900">12s avg</span>
                      </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Satisfaction</span>
                      <span className="font-medium text-green-600">4.8/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Tim */}
        <section id="about" className="py-24 px-8 bg-premium-light">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
               <h2 className={`text-4xl font-bold mb-8 text-gray-900 ${inter.className}`}>
                  A bit more about me
                </h2>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    I didn't start out as an AI expert. My background is in B2B marketing, where I learnt that the best technology solutions are the ones that make people's work simpler and better, not more complicated.
                  </p>
                  <p>
                    When AI started emerging, I was fascinated. So... I decided to go on a journey of rapid learning and adoption so I could specialise. I wanted to become the person businesses could trust to implement AI that actually delivers value.
                  </p>
                  <p>
                    Today, I work exclusively with businesses ready to implement AI agents thoughtfully and effectively.
                  </p>
            </div>

                <div className="mt-8">
                  <h3 className="text-xl font-medium mb-4 text-gray-900">My Background</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>• 8+ years in B2B Marketing and Technology</p>
                    <p>• Former Google Marketing Award Winner (2023)</p>
                    <p>• Certified in a variety of AI platforms and marketing technology</p>
                    <p>• Speaker and thought leader in the marketing industry</p>
                    <p>• Based in Wollongong/Sydney, working with clients across Australia</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-medium mb-4 text-gray-900">When I'm Not Playing With AI</h3>
                  <p className="text-gray-700">
                    I'm probably hanging out with my young family or playing golf. I love coffee and the occassional beer, so if you prefer to connect over a cup or glass, I'm all for it.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-soft">
                <div className="relative h-[480px]">
                  <Image
                    src="/images/tim-presentation.jpeg"
                    alt="Tim presenting"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-8 bg-premium-light text-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-6 ${inter.className}`}>
              Ready to Build AI Agents That Actually Work?
            </h2>
            <p className="text-xl mb-8 text-gray-700">
              If you're tired of AI promises that don't deliver, let's talk. I'll show you exactly how AI agents can transform your specific situation—no generic pitches, no one-size-fits-all solutions.
            </p>
            <p className="text-lg mb-8 text-gray-700">
              Book a 30-minute conversation with me. We'll discuss your challenges, explore what's possible, and I'll give you a clear next step—whether that's working together or tackling this yourself.
            </p>
            
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-soft">
              <h3 className="text-xl font-medium mb-4 text-gray-900">What We'll Cover</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                  <span className="text-gray-700">Your biggest operational challenges</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                  <span className="text-gray-700">Specific AI agent opportunities in your business</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                  <span className="text-gray-700">Realistic timelines and investment requirements</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                  <span className="text-gray-700">Expected ROI and success metrics</span>
                </div>
                <div className="flex items-center gap-3 md:col-span-2">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                  <span className="text-gray-700">Next steps (with or without me)</span>
                </div>
              </div>
            </div>
            
            <Button onClick={openModal} size="lg" className="bg-accent hover:bg-accent-dark text-white text-lg px-10 py-4 rounded-lg shadow-soft shadow-soft-hover transition-all duration-300">
              Book a Call with Tim
            </Button>
          </div>
        </section>

      </main>
      {/* Global Call/Strategy modal */}
      <CallFormModal open={isModalOpen} onClose={closeModal} />

      {/* Footer */}
      <footer id="contact" className="py-12 px-8 border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">TL</div>
                <span className={`text-xl font-bold text-gray-900 ${inter.className}`}>Tim Lillyman</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Building AI agents that actually work for forward-thinking businesses.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-4 text-gray-900">Contact</h3>
              <div className="space-y-2 text-gray-600 text-sm">
                <p>📧 tim@timlillyman.com</p>
                <p>📱 +61422271782</p>
                <p>💼 LinkedIn: /in/timlillyman</p>
                <p>📍 Sydney, Australia</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-4 text-gray-900">Quick Links</h3>
              <div className="space-y-2 text-gray-600 text-sm">
                <Link href="#about" className="block hover:text-accent transition-colors">About Tim</Link>
                <Link href="#contact" className="block hover:text-accent transition-colors">Contact</Link>
                <Button onClick={openModal} className="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-lg text-sm shadow-soft">
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; 2025 Tim Lillyman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}