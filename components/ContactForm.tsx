'use client'

import { useState, FormEvent } from 'react'
import { useLang } from '@/contexts/LangContext'

export default function ContactForm() {
  const { t } = useLang()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorDetail, setErrorDetail] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorDetail(null)
    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        let detail: string | null = null
        if (process.env.NODE_ENV === 'development') {
          try {
            const j = (await res.json()) as {
              missingEnv?: string[]
              hint?: string
              detail?: string
            }
            if (j.missingEnv?.length) {
              detail = `缺少环境变量: ${j.missingEnv.join(', ')}。${j.hint ?? ''}`
            } else if (j.detail) {
              detail = j.detail
            }
          } catch {
            /* ignore */
          }
        }
        setErrorDetail(detail)
        setStatus('error')
      }
    } catch {
      setErrorDetail(null)
      setStatus('error')
    }
  }

  return (
    <div className="border-t-4 border-darkgreen bg-white p-6 md:p-8 shadow-md rounded-sm">
      <div className="w-full bg-darkgreen text-white text-center py-2.5 px-4 rounded mb-6">
        {t('form.note')}
      </div>

      {status === 'success' ? (
        <div className="text-center text-green font-semibold py-8">{t('form.success')}</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('form.firstn')} <span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                type="text"
                required
                maxLength={200}
                placeholder="Enter first name"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green focus:ring-1 focus:ring-green"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('form.lastn')} <span className="text-red-500">*</span>
              </label>
              <input
                name="lastName"
                type="text"
                required
                maxLength={200}
                placeholder="Enter last name"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green focus:ring-1 focus:ring-green"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('form.email')} <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-400 mb-1">{"We'll never share your email with anyone else."}</p>
            <input
              name="email"
              type="email"
              required
              maxLength={200}
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green focus:ring-1 focus:ring-green"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('form.phone')} <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              required
              maxLength={200}
              placeholder="Phone number"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green focus:ring-1 focus:ring-green"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('form.service-label')} <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green focus:ring-1 focus:ring-green bg-white"
            >
              <option value="funeral">{t('form.ser-funeral')}</option>
              <option value="other">{t('form.ser-other')}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('form.message')}
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder="Send us your message ..."
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green focus:ring-1 focus:ring-green resize-none"
            />
          </div>

          {status === 'error' && (
            <div className="text-red-500 text-sm space-y-1">
              <p>{t('form.error')}</p>
              {errorDetail && (
                <p className="font-mono text-xs text-red-600 break-words whitespace-pre-wrap">{errorDetail}</p>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                ;(window as any).gtag_report_conversion('tel:416-722-3453')
              }
            }}
            className="w-full bg-darkgreen text-white font-bold py-2.5 rounded hover:bg-green transition-colors disabled:opacity-60"
          >
            {status === 'loading' ? '...' : t('form.submit')}
          </button>
        </form>
      )}
    </div>
  )
}
