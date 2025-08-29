import '@/styles/globals.css'

import { Metadata, Viewport } from 'next'

import { fontPrimary, fontSecondary } from '@/config'
import { Providers } from '@/providers'
import { cn } from '@/utils/cn'

export const metadata: Metadata = {
  title: 'D-Express - Conexão Profissional',
  description:
    'D-Express: Conectando empregadores e profissionais domésticas com segurança e eficiência.',
  icons: {
    icon: '/logo.png',
  },
}
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="pt">
      <head />
      <body
        suppressHydrationWarning
        className={cn('font-primary antialiased', fontPrimary.variable, fontSecondary.variable)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
