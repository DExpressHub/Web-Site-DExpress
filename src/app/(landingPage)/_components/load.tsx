import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { specialtyUseCase } from '@/presentation/factories/useCase/specialty'
import { cityUseCase } from '@/presentation/factories/useCase/city'
import { generalAvailabilityUseCase } from '@/presentation/factories/useCase/generalAvailability'
import { queriesKey } from '@/presentation/queriesKey'
import { getQueryClient } from '@/presentation/utils/queryClient'
import { prefetchUseCaseSafe } from '@/presentation/utils/prefetchUseCaseSafe'

export async function LoadPageData({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  const generalAvailabilities = prefetchUseCaseSafe({
    defaultValue: [],
    queryKey: [queriesKey.generalAvailabilities],
    fetchFn: () => generalAvailabilityUseCase.listAll.execute(),
    queryClient: queryClient,
  })
  const specialty = prefetchUseCaseSafe({
    defaultValue: [],
    queryKey: [queriesKey.specialties],
    fetchFn: () => specialtyUseCase.listAll.execute(),
    queryClient: queryClient,
  })
  const cities = prefetchUseCaseSafe({
    defaultValue: [],
    queryKey: [queriesKey.cities],
    fetchFn: () => cityUseCase.listAll.execute(),
    queryClient: queryClient,
  })

  await Promise.allSettled([generalAvailabilities, specialty, cities])
  const dehydratedState = dehydrate(queryClient)

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
}
