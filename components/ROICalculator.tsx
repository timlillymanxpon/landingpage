'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

export default function ROICalculator() {
  const [isOpen, setIsOpen] = useState(false)
  const [employees, setEmployees] = useState(10)
  const [hoursSaved, setHoursSaved] = useState(5)
  const [hourlyRate, setHourlyRate] = useState(50)

  const monthlySavings = employees * hoursSaved * 4 * hourlyRate
  const yearlySavings = monthlySavings * 12
  const implementationCost = 15000 // Average project cost
  const roi = ((yearlySavings - implementationCost) / implementationCost) * 100

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg shadow-soft"
      >
        Calculate Your ROI
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 shadow-2xl z-50 max-w-2xl w-full mx-4"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">ROI Calculator</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Number of Employees: {employees}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Hours Saved Per Employee Per Week: {hoursSaved}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={hoursSaved}
                    onChange={(e) => setHoursSaved(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Average Hourly Rate (AUD): ${hourlyRate}
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="200"
                    step="10"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                </div>

                <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-xl p-6 mt-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-1">
                        ${monthlySavings.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Monthly Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary mb-1">
                        ${yearlySavings.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Yearly Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">
                        {roi > 0 ? '+' : ''}{Math.round(roi)}%
                      </div>
                      <div className="text-sm text-gray-600">First Year ROI</div>
                    </div>
                  </div>

                  <p className="text-center text-sm text-gray-600 mt-4">
                    Based on average implementation cost of ${implementationCost.toLocaleString()} AUD
                  </p>
                </div>

                <Button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-lg"
                >
                  Book a Call to Discuss
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}