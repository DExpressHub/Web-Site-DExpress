'use client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { getQueryClient } from '../utils/queryClient'

export function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  // NOTA: Suspense boundaries são requeridas para streaming.
  // Isso é apenas necessário se você estiver fazendo streaming do seu HTML ou usando React.lazy
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
