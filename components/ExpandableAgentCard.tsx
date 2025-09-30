'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AgentCardProps {
  icon: string
  title: string
  whatItDoes: string
  realImpact: string
  perfectFor: string
  delay?: number
}

export default function ExpandableAgentCard({
  icon,
  title,
  whatItDoes,
  realImpact,
  perfectFor,
  delay = 0
}: AgentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <motion.div
        layout
        className="group relative bg-white rounded-2xl p-6 shadow-soft border border-gray-100 cursor-pointer h-full flex flex-col"
        whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)" }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/5 to-secondary/5 pointer-events-none"/>

        <div className="flex items-start justify-between mb-4">
          <motion.div
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary text-white flex items-center justify-center text-2xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 text-2xl"
          >
            ↓
          </motion.div>
        </div>

        <h3 className="text-xl font-medium mb-3 text-gray-900">{title}</h3>

        <div className="text-gray-600 space-y-3 text-sm flex-grow">
          <div>
            <p className="font-medium text-accent">What It Does</p>
            <p>{whatItDoes}</p>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 overflow-hidden"
              >
                <div className="pt-3 border-t border-gray-100">
                  <p className="font-medium text-secondary">Real Impact</p>
                  <p className="italic bg-gradient-to-r from-accent/10 to-secondary/10 p-3 rounded-lg mt-1">
                    "{realImpact}"
                  </p>
                </div>
                <div>
                  <p className="font-medium text-accent">Perfect For</p>
                  <p>{perfectFor}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-4 text-center text-sm text-gray-400 font-medium">
          {isExpanded ? 'Click to collapse' : 'Click to learn more'}
        </div>
      </motion.div>
    </motion.div>
  )
}