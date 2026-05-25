'use client'

import { useLang } from '@/contexts/LangContext'
import ContactForm from './ContactForm'

const fengshuiCards = [
  { sub: 'fengshui.sub1', text: 'fengshui.text1' },
  { sub: 'fengshui.sub2', text: 'fengshui.text2' },
  { sub: 'fengshui.sub3', text: 'fengshui.text3' },
  { sub: 'fengshui.sub4', text: 'fengshui.text4' },
  { sub: 'fengshui.sub5', text: 'fengshui.text5' },
] as const

export default function HomePage() {
  const { t } = useLang()

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Agent Card */}
            <div className="agency-card flex">
              <div
                className="hidden sm:block flex-none w-36 md:w-44 bg-contain bg-no-repeat bg-bottom"
                style={{ backgroundImage: "url('/img/henry.png')", minHeight: '220px' }}
              />
              <div className="agency-info flex-1 rounded-tr-[10px] rounded-br-[10px]">
                <br />
                <h3 className="font-bold text-center text-lg whitespace-pre-line">
                  {t('about.henry')}
                </h3>
                <a
                  href="tel:+14167223453"
                  className="text-lightgrey py-1 text-lg block text-center"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                      ;(window as any).gtag_report_conversion('tel:416-722-3453')
                    }
                  }}
                >
                  416-722-3453
                </a>
                <a href="mailto:henrychuichapelridge@gmail.com" className="text-lightgrey py-2.5 text-lg block text-center">
                  henrychuichapelridge@gmail.com
                </a>
                <p className="text-lightgrey text-center mb-2">{t('about.lang')}</p>
                <div className="flex justify-center">
                  <img src="/img/henry-qrcode.png" alt="WeChat QR" className="wechat-qrcode" />
                </div>
                <br />
                <small className="block text-center text-lightgrey text-xs">
                  {t('about.funeral-license')}
                </small>
                <div className="bg-darkgreen rounded px-2 py-1 mt-2 text-center text-lightgrey text-sm">
                  {t('about.license')}
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-darkgreen italic mb-4">{t('about.title')}</h2>
              <hr className="border-lightgreen mb-4" />
              <p className="text-gray-700 mb-3">{t('about.intro01')}</p>
              <p className="text-gray-700 mb-3">{t('about.intro02')}</p>
              <p className="text-gray-700">{t('about.intro03')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="py-16 md:py-20"
        style={{
          backgroundImage: "url('/img/flower-bw copy.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
          backgroundColor: '#2a5655',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-darkgreen italic text-center mb-2">
            {t('ser.title')}
          </h2>
          <hr className="border-lightgreen mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div
              className="service-img"
              style={{ backgroundImage: "url('/img/service4.jpg')" }}
            >
              <h3 className="pt-[25%] text-white font-bold">{t('ser.05')}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 bg-green">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center italic mb-2">
            {t('faq.title')}
          </h2>
          <hr className="border-lightgreen mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n}>
                <h3 className="text-lightgrey font-bold text-lg mb-1">
                  {t(`faq.q${n}` as Parameters<typeof t>[0])}
                </h3>
                <p className="text-lightgrey mb-8">
                  {t(`faq.a${n}` as Parameters<typeof t>[0])}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fengshui Section */}
      <section id="fengshui" className="py-16 md:py-20 bg-green">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('fengshui.title1')}
          </h1>
          <p className="text-white mb-10">{t('fengshui.subtext-a')}</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('fengshui.title2')}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {fengshuiCards.map((card) => (
              <div key={card.sub} className="bg-white rounded shadow-sm p-4">
                <h5 className="font-bold text-gray-800 text-base mb-2">{t(card.sub)}</h5>
                <p className="text-gray-500 text-sm">{t(card.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
