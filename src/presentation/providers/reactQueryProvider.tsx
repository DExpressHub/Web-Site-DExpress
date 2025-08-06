'use client'
import {
  QueryClientProvider,
  HydrationBoundary,
  QueryClient,
  DehydratedState,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

export function ReactQueryProvider({
  children,
  dehydratedState,
}: {
  children: React.ReactNode
  dehydratedState?: DehydratedState
}) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
