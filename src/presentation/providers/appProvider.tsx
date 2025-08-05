'use client'

import * as React from 'react'

import { ThemeProvider } from './themeProvider'
import { ReactQueryProvider } from './reactQueryProvider'

export interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider disableTransitionOnChange enableSystem attribute="class" defaultTheme="dark">
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  )
}
