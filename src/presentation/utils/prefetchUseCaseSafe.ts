import { QueryClient } from '@tanstack/react-query'

import { UseCaseResponse } from '@/core/types/useCaseResponse'

const ONE_DAY_MS = 1000 * 60 * 60 * 24

type PrefetchSafeParams<T> = {
  queryKey: unknown[]
  fetchFn: () => Promise<UseCaseResponse<T>>
  defaultValue: T
  staleTime?: number
  queryClient: QueryClient
  retry?: number
}
export async function prefetchUseCaseSafe<T>(params: PrefetchSafeParams<T>) {
  const { defaultValue, fetchFn, queryClient, queryKey, staleTime, retry } = params

  return queryClient.prefetchQuery({
    queryKey,
    queryFn: async () => {
      try {
        const result = await fetchFn()

        return result.success ? result.data : defaultValue
      } catch {}
    },
    staleTime: staleTime ?? ONE_DAY_MS,
    retry: retry ?? false,
  })
}
