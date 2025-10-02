'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

type CallFormModalProps = {
  open: boolean
  onClose: () => void
}

type FormState = {
  firstName: string
  lastName: string
  company: string
  role: string
  email: string
  phone: string
  inquiry: string
}

const initialFormState: FormState = {
  firstName: '',
  lastName: '',
  company: '',
  role: '',
  email: '',
  phone: '',
  inquiry: ''
}

export default function CallFormModal({ open, onClose }: CallFormModalProps) {
  const [form, setForm] = useState<FormState>(initialFormState)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const updateField = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [key]: e.target.value }))
  }

  const reset = () => {
    setForm(initialFormState)
    setMessage('')
    setIsSuccess(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')

    if (!form.firstName || !form.company || !form.email || !form.inquiry) {
      setMessage('Please fill in all required fields (first name, company, email, inquiry).')
      return
    }

    try {
      setSubmitting(true)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: 'Failed to submit form' }))
        throw new Error(error || 'Failed to submit form')
      }
      setIsSuccess(true)
      setMessage("Thanks! Your message has been sent. I'll be in touch shortly.")
      setTimeout(() => {
        reset()
        onClose()
      }, 2200)
    } catch (err: any) {
      setMessage(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white w-full max-w-lg mx-4 rounded-2xl shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent"></div>
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Book a Call</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors text-2xl">✕</button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white text-2xl">✓</div>
            </div>
            <p className="text-xl font-bold text-gray-900">Submission received</p>
            <p className="text-gray-600">{message}</p>
          </div>
        ) : (
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">First name *</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                value={form.firstName}
                onChange={updateField('firstName')}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Last name</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                value={form.lastName}
                onChange={updateField('lastName')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Company *</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                value={form.company}
                onChange={updateField('company')}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Role</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                value={form.role}
                onChange={updateField('role')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Email *</label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                value={form.email}
                onChange={updateField('email')}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Phone</label>
              <input
                type="tel"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                value={form.phone}
                onChange={updateField('phone')}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Inquiry *</label>
            <textarea
              className="w-full rounded-lg border border-gray-200 px-3 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
              value={form.inquiry}
              onChange={updateField('inquiry')}
              required
            />
          </div>

          {message && (
            <div className={`text-sm ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>{message}</div>
          )}

          <div className="flex items-center justify-end gap-3 pt-2">
            <Button type="button" onClick={onClose} className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-6 py-2.5 rounded-full transition-colors text-base">Cancel</Button>
            <Button type="submit" disabled={submitting} className="bg-gradient-to-r from-accent to-secondary hover:from-accent-dark hover:to-secondary-dark text-white px-6 py-2.5 rounded-full shadow-soft transition-all disabled:opacity-50 text-base">
              {submitting ? 'Sending...' : 'Submit'}
            </Button>
          </div>
        </form>
        )}
      </div>
    </div>
  )
}


