import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/contexts/LangContext'

export const metadata: Metadata = {
  title: 'Pre-Plan Cemetery & Funeral | 多伦多殡葬服务',
  description: '多伦多殡葬服务 | Pre-Plan Cemetery & Funeral Services in Toronto',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-197873382-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-197873382-1');
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof url !== 'undefined' && url && /^https?:/i.test(String(url))) {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-XXXXXXXXX/XXXXXXXXXXXXX',
                  'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
      </head>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  )
}
