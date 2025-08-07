import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { getSpecialtiesUseCaseFactory } from '@/presentation/factories/getSpecialties'
import { getCitiesUseCaseFactory } from '@/presentation/factories/getCities'
import { queriesKey } from '@/presentation/queriesKey'
import { getQueryClient } from '@/presentation/utils/queryClient'

export async function LoadPageData({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  await Promise.allSettled([
    queryClient.prefetchQuery({
      queryKey: [queriesKey.specialties],
      queryFn: async () => {
        const result = await getSpecialtiesUseCaseFactory().execute()

        return result.success ? result.data : []
      },
    }),
    queryClient.prefetchQuery({
      queryKey: [queriesKey.cities],
      queryFn: async () => {
        const result = await getCitiesUseCaseFactory().execute()

        return result.success ? result.data : []
      },
    }),
  ])

  const dehydratedState = dehydrate(queryClient)

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
}
