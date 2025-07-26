import '@/styles/globals.css'

import { Metadata, Viewport } from 'next'
import { cn } from '@heroui/theme'

import { fontPrimary, fontSecondary } from '@/config'
import { Providers } from '@/providers'

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
    <html suppressHydrationWarning className="scroll-smooth" lang="pt">
      <head />
      <body
        className={cn(
          'min-h-dvh font-primary bg-background text-foreground font-light antialiased',
          fontPrimary.variable,
          fontSecondary.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', enableSystem: true }}>{children}</Providers>
      </body>
    </html>
  )
}
