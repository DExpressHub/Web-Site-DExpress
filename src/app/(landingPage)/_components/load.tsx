import { dehydrate, QueryClient } from '@tanstack/react-query'

import { ReactQueryProvider } from '@/presentation/providers/reactQueryProvider'
import { getSpecialtiesUseCaseFactory } from '@/presentation/factories/getSpecialties'
import { queriesKey } from '@/presentation/queriesKey'

export async function LoadPageData({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60 * 24,
        gcTime: 1000 * 60 * 60 * 24,
        retry: false,
      },
    },
  })

  await queryClient.prefetchQuery({
    queryKey: [queriesKey.specialties],
    queryFn: async () => {
      const result = await getSpecialtiesUseCaseFactory().execute()

      if (!result.success) return []

      return result.data
    },
  })

  const dehydratedState = dehydrate(queryClient)

  return <ReactQueryProvider dehydratedState={dehydratedState}>{children}</ReactQueryProvider>
}
