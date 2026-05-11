'use client'

import Link from 'next/link'
import { useLang } from '@/contexts/LangContext'

export default function PricePage() {
  const { t } = useLang()

  return (
    <>
      {/* Top Banner */}
      <div
        className="pt-[104px] flex items-center justify-center min-h-[40vh] md:min-h-[60vh]"
        style={{
          backgroundImage: "url('/img/new-bg-img-2021.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
          backgroundColor: '#bbbbbb',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center px-4">
          <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl whitespace-pre-line mb-6">
            {t('price.slogan')}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/#contact" className="general-btn">
              {t('price.contact')}
            </Link>
            <Link href="/price" className="general-btn">
              {t('price.list-btn')}
            </Link>
          </div>
        </div>
      </div>

      {/* Price Lists */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="font-bold text-2xl text-green mb-2">{t('price.list-title')}</h1>
          <h2 className="text-lg text-gray-500 italic mb-10 font-normal">{t('price.click')}</h2>

          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col items-center">
              <a
                href="/img/docs/ChapelRidge-PriceList-01October2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-green hover:text-darkgreen transition-colors"
              >
                <img
                  src="/img/docs/CR-October-2025-Price-List-cover.jpg"
                  alt="Chapel Ridge Price List"
                  className="max-w-[300px] w-full rounded shadow"
                />
                <span className="mt-4 text-base text-center">{t('price.chapel-label')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
