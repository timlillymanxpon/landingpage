'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Inter } from 'next/font/google'
import Image from 'next/image'
import CallFormModal from '@/components/CallFormModal'
import FadeIn from '@/components/animations/FadeIn'
import CountUp from '@/components/animations/CountUp'
import ROICalculator from '@/components/ROICalculator'
import ExpandableAgentCard from '@/components/ExpandableAgentCard'
import { useState } from 'react'
import { motion } from 'framer-motion'

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
        <section className="relative py-24 px-8 overflow-hidden">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-secondary/5 to-transparent" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-secondary/10 via-transparent to-accent/10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right">
                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`text-6xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 ${inter.className}`}
                  >
                    I Build AI Agents & Automation That Actually{' '}
                    <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                      Move the Needle
                    </span>{' '}
                    for Your Business
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl text-gray-600 mb-10 leading-relaxed"
                  >
                    I partner with forward-thinking leaders and marketing teams to implement AI agents and intelligent automation that don't just handle repetitive tasks—they transform how your entire operation runs.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Button
                      onClick={openModal}
                      size="lg"
                      className="bg-accent hover:bg-accent-dark text-white text-base px-10 py-5 rounded-lg shadow-soft hover:shadow-soft-hover hover:scale-105 transition-all duration-300 font-medium"
                    >
                      Book a call with me
                    </Button>
                    <ROICalculator onBookCall={openModal} />
                  </motion.div>
                </div>
              </FadeIn>
              
                             {/* Hero Image with Floating Cards */}
               <div className="relative">

                 {/* Main Headshot Container */}
                 <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.6, delay: 0.4 }}
                   className="relative max-w-md mx-auto"
                 >
                   <Image
                     src="/images/Tim new Headshot.png"
                     alt="Tim Lillyman - Marketing and AI Expert"
                     width={448}
                     height={448}
                     className="w-full h-auto shadow-soft rounded-lg"
                     priority
                   />

                   {/* Floating Cards with Animations */}
                   <motion.div
                     animate={{
                       y: [0, -10, 0],
                       rotate: [3, 0, 3]
                     }}
                     transition={{
                       duration: 4,
                       repeat: Infinity,
                       ease: "easeInOut"
                     }}
                     className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-soft border border-accent/20 hover:border-accent/40 transition-colors"
                   >
                     <div className="text-center">
                       <div className="text-xl mb-2">👨‍💼</div>
                       <p className="font-medium text-sm text-gray-900">Tim Lillyman</p>
                       <p className="text-xs text-gray-500">AI Automation Expert</p>
                     </div>
                   </motion.div>

                   <motion.div
                     animate={{
                       y: [0, 10, 0],
                       rotate: [6, 0, 6]
                     }}
                     transition={{
                       duration: 5,
                       repeat: Infinity,
                       ease: "easeInOut",
                       delay: 1
                     }}
                     className="absolute top-1/2 -right-8 bg-white rounded-lg p-3 shadow-soft border border-secondary/20 hover:border-secondary/40 transition-colors"
                   >
                     <div className="text-center">
                       <div className="text-xl mb-1">🤖</div>
                       <p className="font-medium text-xs text-gray-900">
                         <CountUp to={50} suffix="+" /> Agents
                       </p>
                       <p className="text-xs text-gray-500">Implemented</p>
                     </div>
                   </motion.div>

                   <motion.div
                     animate={{
                       y: [0, -8, 0],
                       rotate: [-3, 0, -3]
                     }}
                     transition={{
                       duration: 4.5,
                       repeat: Infinity,
                       ease: "easeInOut",
                       delay: 2
                     }}
                     className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-soft border border-accent/20 hover:border-accent/40 transition-colors"
                   >
                     <div className="text-center">
                       <div className="text-2xl mb-2">⏰</div>
                       <p className="font-medium text-sm text-gray-900">
                         <CountUp to={8} /> Years
                       </p>
                       <p className="text-xs text-gray-500">Marketing & Tech</p>
                     </div>
                   </motion.div>
                 </motion.div>
               </div>
            </div>
          </div>
        </section>

                 {/* Personal Story Section */}
         <section className="py-24 px-8 bg-gradient-to-br from-premium-light to-white">
           <div className="max-w-7xl mx-auto">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
               <FadeIn direction="left">
                 <div className="bg-white rounded-2xl p-4 shadow-soft hover:shadow-soft-hover transition-shadow">
                   <div className="relative rounded-xl overflow-hidden h-[420px]">
                     <Image
                       src="/images/tim-presentation.jpeg"
                       alt="Tim Lillyman presenting on AI maturity"
                       fill
                       className="object-cover"
                       sizes="(min-width: 1024px) 40vw, 100vw"
                       priority
                     />
                   </div>
                 </div>
               </FadeIn>

               <FadeIn direction="right">
                 <div>
                   <h2 className={`text-4xl font-bold mb-6 text-gray-900 ${inter.className}`}>
                     Why I Specialise in AI Agents & Automation{' '}
                     <span className="text-secondary">(And Why Most Fail)</span>
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
               </FadeIn>
             </div>
           </div>
         </section>

        {/* My Approach Section */}
        <section id="approach" className="relative py-24 px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/5 to-white" />

          <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className={`text-4xl font-bold mb-6 text-gray-900 ${inter.className}`}>
                  My 4-Phase AI Implementation Method
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Here's exactly how I work with clients to build AI agents and automation systems that deliver results:
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                {
                  num: 1,
                  title: 'Listen First',
                  desc: "I take time to understand current processes and daily frustrations, identifying what's slowing your team down and where the opportunity lies.",
                  color: 'accent',
                  delay: 0.1
                },
                {
                  num: 2,
                  title: 'Design for Your Reality',
                  desc: 'No cookie-cutter solutions. Agents and automation workflows that work with your existing tools, processes, and team dynamics.',
                  color: 'secondary',
                  delay: 0.2
                },
                {
                  num: 3,
                  title: 'Build and Test Obsessively',
                  desc: "No deploy-and-disappear approach. Hands-on involvement until your agents and automation are performing exactly as promised.",
                  color: 'accent',
                  delay: 0.3
                },
                {
                  num: 4,
                  title: 'Optimise for Growth',
                  desc: 'As your business evolves, your agents and automation evolve with you. Ongoing refinement ensures they keep delivering value.',
                  color: 'secondary',
                  delay: 0.4
                }
              ].map((phase, i) => (
                <FadeIn key={i} delay={phase.delay}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="text-center relative h-full bg-white rounded-xl p-6 shadow-soft hover:shadow-soft-hover transition-shadow"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                      className={`w-16 h-16 bg-${phase.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg`}
                    >
                      {phase.num}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{phase.title}</h3>
                    <p className="text-gray-600 italic">
                      {phase.desc}
                    </p>
                    {i < 3 && (
                      <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-accent to-secondary"></div>
                    )}
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-24 px-8 bg-gradient-to-br from-premium-light to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-50"/>
          <div className="max-w-5xl mx-auto relative">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className={`text-4xl font-bold mb-6 text-gray-900 ${inter.className}`}>
                  What Others Say
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)" }}
                className="bg-white rounded-2xl p-10 md:p-12 shadow-soft relative border-2 border-secondary/20"
              >
                <div className="absolute top-8 left-8 text-6xl text-secondary/30 font-serif">"</div>
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0"
                  >
                    <Image
                      src="/images/Louise-Cummins-media-photo-modified.png"
                      alt="Louise Cummins"
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-secondary/30"
                    />
                  </motion.div>
                  <div>
                    <h3 className="font-medium text-xl text-gray-900">Louise Cummins</h3>
                    <p className="text-accent text-base">Co-Founder of Australian Centre for AI in Marketing</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 text-xl italic leading-relaxed relative z-10">
                  "In the rapidly evolving landscape of AI in marketing, it is critical to identify the next generation of leaders who can navigate the complexity. <span className="text-secondary font-semibold not-italic">Tim Lillyman is undoubtedly one of those leaders.</span> Through the events and conversations I have hosted with Tim, I've been consistently impressed. He pairs a forward-thinking, strategic vision with the crucial, hands-on technical knowledge required to execute on it."
                </blockquote>
              </motion.div>
            </FadeIn>
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
              <ExpandableAgentCard
                icon="💬"
                title="Content Generation Agent"
                whatItDoes="Automatically creates blog posts, social media content, email campaigns, and marketing materials based on your brand guidelines and target audience."
                realImpact="Reduced content creation time from 8 hours to 30 minutes per piece whilst maintaining brand consistency across all channels."
                perfectFor="Marketing teams, agencies, and content-heavy businesses"
                delay={0}
              />
              <ExpandableAgentCard
                icon="🎯"
                title="Lead Management Agent"
                whatItDoes="Intelligently qualifies, scores, and routes leads through your sales funnel, ensuring no opportunities slip through the cracks."
                realImpact="Increased lead qualification accuracy by 85% and reduced response time from 4 hours to 2 minutes."
                perfectFor="Sales teams with high lead volumes and complex qualification criteria"
                delay={0.1}
              />
              <ExpandableAgentCard
                icon="📋"
                title="Proposal and SOW Agent"
                whatItDoes="Generates customised proposals, statements of work, and contracts based on client conversations, requirements, and your service offerings."
                realImpact="Cut proposal creation time from 3 days to 45 minutes whilst increasing win rates by 23% through better personalisation."
                perfectFor="Service businesses, consultancies, and agencies"
                delay={0.2}
              />
              <ExpandableAgentCard
                icon="🏆"
                title="Sales Coaching Agent"
                whatItDoes="Analyses sales calls, provides real-time feedback, and offers personalised coaching recommendations to improve performance."
                realImpact="Improved average deal closure rates by 34% and reduced onboarding time for new sales reps from 6 months to 8 weeks."
                perfectFor="Sales organisations focused on continuous improvement and team development"
                delay={0.3}
              />
              <ExpandableAgentCard
                icon="🔍"
                title="Prospecting Agent"
                whatItDoes="Researches potential clients, identifies key decision makers, and crafts personalised outreach messages based on company insights and industry trends."
                realImpact="Increased qualified meeting bookings by 67% whilst reducing prospecting time per lead from 45 minutes to 3 minutes."
                perfectFor="Business development teams and companies focused on scaling outbound sales"
                delay={0.4}
              />
              <ExpandableAgentCard
                icon="👥"
                title="Account Management Agent"
                whatItDoes="Monitors client health scores, identifies upsell opportunities, manages renewal timelines, and maintains ongoing client relationships."
                realImpact="Reduced churn by 41% and increased account expansion revenue by 28% through proactive relationship management."
                perfectFor="SaaS companies, subscription businesses, and service providers with ongoing client relationships"
                delay={0.5}
              />
            </div>

            <div className="text-center mt-16">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
                These are just six examples. Your business might need something completely different—and that's exactly what I specialise in: custom AI agents designed for your unique processes and challenges.
              </p>
              <Button onClick={openModal} className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg shadow-soft text-base">
                Book Your Strategy Session
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
                        <span className="text-gray-700">Team training and documentation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                        <span className="text-gray-700">Ongoing optimisation and support</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent mb-2">Typical Investment Range: $3,000 - $30,000 AUD</p>
                    <p className="text-sm text-gray-600 mb-6">Depends on number of agents, complexity, and integrations</p>
                    <Button onClick={openModal} className="bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-lg shadow-soft text-base">
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
                   <Button onClick={openModal} className="bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-lg shadow-soft text-base">
                     Book Strategy Session
                   </Button>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* Why Work with Tim */}
        <section className="py-24 px-8 bg-gradient-to-br from-gray-50 to-premium-light relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-30"/>
          <div className="max-w-7xl mx-auto relative">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className={`text-4xl font-bold mb-6 text-gray-900 ${inter.className}`}>
                  Why Businesses Choose to Work with Me
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="text-center bg-white rounded-xl p-6 shadow-soft border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6"
                  >
                    💬
                  </motion.div>
                  <h3 className="text-xl font-medium mb-4 text-gray-900">I Speak Business, Not Tech</h3>
                  <p className="text-gray-700">
                    I translate complex AI and automation capabilities into clear business outcomes. You'll always understand exactly what we're building and why.
                  </p>
                </motion.div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="text-center bg-white rounded-xl p-6 shadow-soft border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6"
                  >
                    🤝
                  </motion.div>
                  <h3 className="text-xl font-medium mb-4 text-gray-900">I Stay Hands-On</h3>
                  <p className="text-gray-700">
                    I don't build and disappear. I stay involved until your agents and automation systems are working perfectly and your team is confident using them.
                  </p>
                </motion.div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="text-center bg-white rounded-xl p-6 shadow-soft border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6"
                  >
                    🚀
                  </motion.div>
                  <h3 className="text-xl font-medium mb-4 text-gray-900">I'm Constantly Learning</h3>
                  <p className="text-gray-700">
                    AI evolves fast. I'm always testing new tools, exploring emerging techniques, and staying ahead of the curve.
                  </p>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* A Recent Project */}
        <section className="py-24 px-8 bg-gradient-to-br from-white to-premium-light relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-30"/>
          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="left">
                <div>
                  <h2 className={`text-4xl font-bold mb-8 text-gray-900 ${inter.className}`}>
                    How I Helped <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">XPON's Sales Team</span> Save 40 Hours Per Month with Three AI Agents
                  </h2>

                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-xl font-medium mb-3 text-accent">The Challenge</h3>
                      <p className="text-gray-700">
                        XPON's sales team was drowning in admin work. Prospecting research took hours, proposals took days, and reps struggled to improve their techniques.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-xl font-medium mb-3 text-secondary">The Solution</h3>
                      <p className="text-gray-700 mb-4">
                        Over 3 months, I built and deployed three AI agents:
                      </p>
                      <div className="grid grid-cols-1 gap-4 text-sm">
                        <motion.div
                          whileHover={{ scale: 1.02, x: 4 }}
                          className="bg-gradient-to-r from-accent/10 to-accent/5 p-4 rounded-lg border-l-4 border-accent"
                        >
                          <strong className="text-accent">Prospecting Agent:</strong> Cut research time from 2 hours to 2 minutes per lead
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02, x: 4 }}
                          className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-4 rounded-lg border-l-4 border-secondary"
                        >
                          <strong className="text-secondary">Proposal & SOW Agent:</strong> Reduced proposal time from 4 hours to 10 minutes
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02, x: 4 }}
                          className="bg-gradient-to-r from-accent/10 to-secondary/5 p-4 rounded-lg border-l-4 border-accent"
                        >
                          <strong className="text-accent">Sales Coaching Agent:</strong> Provides 1-to-1 coaching immediately after every call
                        </motion.div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-xl font-medium mb-4 text-accent">The Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          whileHover={{ scale: 1.05, y: -4 }}
                          className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200"
                        >
                          <div className="text-3xl font-bold text-green-600">
                            <CountUp to={40} suffix="hrs" />
                          </div>
                          <div className="text-sm text-gray-600 mt-2">Saved per month</div>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05, y: -4 }}
                          className="text-center bg-gradient-to-br from-accent/10 to-accent/20 p-6 rounded-xl border border-accent/30"
                        >
                          <div className="text-3xl font-bold text-accent">
                            $<CountUp to={29} suffix="k" />
                          </div>
                          <div className="text-sm text-gray-600 mt-2">Annualised productivity savings</div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.3}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)" }}
                  className="bg-white rounded-2xl p-8 shadow-soft relative border border-gray-100"
                >
                  <div className="absolute top-6 left-6 text-5xl text-accent/30 font-serif">"</div>
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex-shrink-0"
                    >
                      <Image
                        src="/images/Leadership-Chris_Rozic-modified.png"
                        alt="Chris Rozic"
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full object-cover ring-2 ring-accent/20"
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-medium text-lg text-gray-900">Chris Rozic</h3>
                      <p className="text-secondary">Chief Growth Officer at XPON</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 text-lg italic mb-6 relative z-10">
                    "Tim has been a genuine force multiplier for our entire Go-to-Market function. His pioneering work in AI and automation has, and continues to deliver, tangible, bottom-line results for XPON. We've specifically seen a huge impact on our Sales team, with each rep saving over <span className="text-accent font-semibold not-italic">15 hours of their time each week</span> thanks to the AI systems Tim has built."
                  </blockquote>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* About Tim */}
        <section id="about" className="py-24 px-8 bg-gradient-to-br from-premium-light to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-30"/>
          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="left">
                <div>
                  <h2 className={`text-4xl font-bold mb-8 text-gray-900 ${inter.className}`}>
                    A bit more <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">about me</span>
                  </h2>

                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      I didn't start out as an AI expert. My background is in B2B marketing, where I learnt that the best technology solutions are the ones that make people's work simpler and better, not more complicated.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      When AI started emerging, I was fascinated. So... I decided to go on a journey of rapid learning and adoption so I could specialise. I wanted to become the person businesses could trust to implement AI that actually delivers value.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      Today, I work exclusively with businesses ready to implement AI agents thoughtfully and effectively.
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 bg-white rounded-xl p-6 shadow-soft border border-gray-100"
                  >
                    <h3 className="text-xl font-medium mb-4 text-accent">My Background</h3>
                    <div className="space-y-3 text-gray-700">
                      {[
                        "8+ years in B2B Marketing and Technology",
                        "Former Google Marketing Award Winner (2023)",
                        "Certified in a variety of AI platforms and marketing technology",
                        "Speaker and thought leader in the marketing industry",
                        "Based in Wollongong/Sydney, working with clients across Australia"
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-accent to-secondary rounded-full"/>
                          <p>{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 }}
                    className="mt-6 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl p-6 border border-secondary/20"
                  >
                    <h3 className="text-xl font-medium mb-4 text-secondary">When I'm Not Playing With AI</h3>
                    <p className="text-gray-700">
                      I'm probably hanging out with my young family or playing golf. I love coffee and the occassional beer, so if you prefer to connect over a cup or glass, I'm all for it.
                    </p>
                  </motion.div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.3}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  className="rounded-2xl overflow-hidden shadow-soft border-4 border-white"
                >
                  <div className="relative h-[480px]">
                    <Image
                      src="/images/tim-family-photo.png"
                      alt="Tim with family"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"/>
                  </div>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-8 bg-gradient-to-br from-premium-light to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 opacity-50"/>
          <div className="max-w-4xl mx-auto text-center relative">
            <FadeIn>
              <h2 className={`text-4xl font-bold mb-6 ${inter.className}`}>
                Ready to Accelerate Your Business <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">with AI?</span>
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-8 text-gray-700"
              >
                If you're tired of AI promises that don't deliver, let's talk. I'll show you exactly how AI agents can transform your specific situation—no generic pitches, no one-size-fits-all solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg mb-8 text-gray-700"
              >
                Book a 30-minute conversation with me. We'll discuss your challenges, explore what's possible, and I'll give you a clear next step—whether that's working together or tackling this yourself.
              </motion.p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white rounded-2xl p-8 mb-8 shadow-soft border border-gray-100"
              >
                <h3 className="text-xl font-medium mb-6 text-gray-900">What We'll Cover</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  {[
                    "Your biggest operational challenges",
                    "Specific AI agent opportunities in your business",
                    "Realistic timelines and investment requirements",
                    "Expected ROI and success metrics"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className="w-6 h-6 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      >
                        ✓
                      </motion.div>
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 md:col-span-2"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    >
                      ✓
                    </motion.div>
                    <span className="text-gray-700">Next steps (with or without me)</span>
                  </motion.div>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn delay={1.3}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={openModal} size="lg" className="bg-gradient-to-r from-accent to-secondary hover:from-accent-dark hover:to-secondary-dark text-white text-base px-10 py-4 rounded-lg shadow-soft">
                  Book a Call with Tim
                </Button>
              </motion.div>
            </FadeIn>
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
                <Button onClick={openModal} className="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-lg text-base shadow-soft">
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