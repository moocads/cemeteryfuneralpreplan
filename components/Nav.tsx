'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/contexts/LangContext'
import type { Locale } from '@/lib/i18n'

export default function Nav() {
  const { t, locale, setLocale } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.about', href: '/#about' },
    { key: 'nav.services', href: '/#service' },
    { key: 'nav.faq', href: '/#faq' },
    { key: 'nav.contact', href: '/#contact' },
  ] as const

  const langOptions: { code: Locale; label: string }[] = [
    { code: 'zh', label: '简' },
    { code: 'tc', label: '繁' },
    { code: 'en', label: 'EN' },
  ]

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Topbar */}
      <div className="bg-darkgreen">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-1.5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-white text-sm">徐培康</span>
            <img src="/img/phone2.svg" alt="phone" className="w-5 h-5" />
            <a
              href="tel:+14167223453"
              className="text-white text-sm hover:text-lightgreen transition-colors"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                  ;(window as any).gtag_report_conversion('tel:416-722-3453')
                }
              }}
            >
              416-722-3453
            </a>
            <Link
              href="/price"
              className="hidden sm:inline-block text-white text-sm border border-white rounded-full px-3 py-0.5 ml-2 hover:bg-white hover:text-darkgreen transition-all duration-300"
            >
              {t('nav.price-list')}
            </Link>
            <a
              href="/img/docs/BAO-consumer-info-april-2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block text-white text-sm border border-white rounded-full px-3 py-0.5 hover:bg-white hover:text-darkgreen transition-all duration-300"
            >
              {t('nav.guide')}
            </a>
          </div>
          <div className="flex items-center gap-1">
            {langOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLocale(opt.code)}
                className={`text-sm px-2 py-0.5 rounded transition-colors ${
                  locale === opt.code
                    ? 'text-white font-bold underline'
                    : 'text-lightgreen hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-lightgrey shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
          <Link
            href="/"
            className="font-cinzel font-bold text-xl md:text-2xl text-green hover:text-green"
          >
            {t('nav.name')}
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-green text-base px-3 py-2 hover:text-darkgreen transition-colors block"
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/price"
                className="text-green text-base px-3 py-2 hover:text-darkgreen transition-colors block"
              >
                {t('nav.price-list')}
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden bg-green text-white p-2 rounded focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-lightgrey border-t border-lightgreen">
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-green text-base px-6 py-3 hover:text-darkgreen hover:bg-lightgreen transition-colors block"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/price"
                  onClick={() => setMenuOpen(false)}
                  className="text-green text-base px-6 py-3 hover:text-darkgreen hover:bg-lightgreen transition-colors block"
                >
                  {t('nav.price-list')}
                </Link>
              </li>
              <li>
                <a
                  href="/img/docs/BAO-consumer-info-april-2021.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green text-base px-6 py-3 hover:text-darkgreen hover:bg-lightgreen transition-colors block"
                >
                  {t('nav.guide')}
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  )
}
