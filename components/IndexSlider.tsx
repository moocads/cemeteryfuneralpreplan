'use client'

import { useState, useEffect, useCallback } from 'react'
import { useLang } from '@/contexts/LangContext'

function getSlides(locale: string): { desktop: string; mobile: string }[] {
  if (locale === 'tc') {
    return [{ desktop: '/img/banner/1-trd.jpg', mobile: '/img/banner/1-trd-mobile.jpg' }]
  }
  // zh and en both use cn banners
  return [{ desktop: '/img/banner/1-cn.jpg', mobile: '/img/banner/1-cn-mobile.jpg' }]
}

export default function IndexSlider() {
  const { locale } = useLang()
  const slides = getSlides(locale)
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length])

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next, slides.length])

  // Reset to 0 when locale changes
  useEffect(() => setCurrent(0), [locale])

  return (
    <div className="pt-[104px]">
      {/* Desktop */}
      <div className="hidden md:block relative overflow-hidden w-full">
        {slides.map((slide, i) => (
          <img
            key={slide.desktop}
            src={slide.desktop}
            alt="banner"
            className={`w-full object-cover transition-opacity duration-700 ${
              i === current ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
            style={{ maxHeight: '660px' }}
          />
        ))}
      </div>

      {/* Mobile */}
      <div className="block md:hidden relative overflow-hidden w-full">
        {slides.map((slide, i) => (
          <img
            key={slide.mobile}
            src={slide.mobile}
            alt="banner"
            className={`w-full object-cover transition-opacity duration-700 ${
              i === current ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          />
        ))}
        {/* Indicators */}
        {slides.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? 'bg-darkgreen' : 'bg-lightgreen'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
