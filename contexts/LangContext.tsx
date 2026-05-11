'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { type Locale, defaultLocale, getTranslations } from '@/lib/i18n'

const COOKIE_NAME = 'site_locale'

interface LangContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: Parameters<ReturnType<typeof getTranslations>>[0]) => string
}

const LangContext = createContext<LangContextValue | null>(null)

function readLocaleCookie(): Locale {
  if (typeof document === 'undefined') return defaultLocale
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`))
  const val = match ? decodeURIComponent(match[1]) : null
  if (val === 'zh' || val === 'tc' || val === 'en') return val
  return defaultLocale
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    setLocaleState(readLocaleCookie())
  }, [])

  function setLocale(next: Locale) {
    setLocaleState(next)
    document.cookie = `${COOKIE_NAME}=${next}; path=/; max-age=${60 * 60 * 24 * 365}`
  }

  const t = getTranslations(locale)

  return <LangContext.Provider value={{ locale, setLocale, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
