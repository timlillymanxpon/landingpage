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
      <div className="relative bg-white w-full max-w-lg mx-4 rounded-2xl shadow-2xl border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-xl font-medium">Book a Call</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-3">
            <div className="mx-auto w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl">✓</div>
            <p className="text-lg font-medium">Submission received</p>
            <p className="text-gray-600">{message}</p>
          </div>
        ) : (
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First name *</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={form.firstName}
                onChange={updateField('firstName')}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last name</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={form.lastName}
                onChange={updateField('lastName')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Company *</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={form.company}
                onChange={updateField('company')}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Role</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={form.role}
                onChange={updateField('role')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={form.email}
                onChange={updateField('email')}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={form.phone}
                onChange={updateField('phone')}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Inquiry *</label>
            <textarea
              className="w-full rounded-lg border border-gray-300 px-3 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={form.inquiry}
              onChange={updateField('inquiry')}
              required
            />
          </div>

          {message && (
            <div className={`text-sm ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>{message}</div>
          )}

          <div className="flex items-center justify-end gap-3 pt-2">
            <Button type="button" onClick={onClose} className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-full">Cancel</Button>
            <Button type="submit" disabled={submitting} className="bg-accent hover:bg-accent-dark text-white px-5 py-2 rounded-full">
              {submitting ? 'Sending...' : 'Submit'}
            </Button>
          </div>
        </form>
        )}
      </div>
    </div>
  )
}


