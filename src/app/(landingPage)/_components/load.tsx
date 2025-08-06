import { dehydrate, QueryClient } from '@tanstack/react-query'

import { ReactQueryProvider } from '@/presentation/providers/reactQueryProvider'
import { getSpecialtiesUseCaseFactory } from '@/presentation/factories/getSpecialties'
import { queriesKey } from '@/presentation/queriesKey'
import { getCitiesUseCaseFactory } from '@/presentation/factories/getCities'

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

  const fetchSpecialties = queryClient.prefetchQuery({
    queryKey: [queriesKey.specialties],
    queryFn: async () => {
      const result = await getSpecialtiesUseCaseFactory().execute()

      return result.success ? result.data : []
    },
  })

  const fetchCities = queryClient.prefetchQuery({
    queryKey: [queriesKey.cities],
    queryFn: async () => {
      const result = await getCitiesUseCaseFactory().execute()

      return result.success ? result.data : []
    },
  })
  const fetchers = [fetchSpecialties, fetchCities]

  await Promise.allSettled(fetchers)
  const dehydratedState = dehydrate(queryClient)

  return <ReactQueryProvider dehydratedState={dehydratedState}>{children}</ReactQueryProvider>
}
