'use client'

import { useLang } from '@/contexts/LangContext'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-darkgreen py-4 text-center">
      <small className="text-white block text-sm">
        © {year} {t('footer.name')}
      </small>
    </footer>
  )
}
