import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { desiredPositionUseCase } from '@/presentation/factories/useCase/desiredPosition'
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
  const desiredPosition = prefetchUseCaseSafe({
    defaultValue: [],
    queryKey: [queriesKey.desiredPosition],
    fetchFn: () => desiredPositionUseCase.listAll.execute(),
    queryClient: queryClient,
  })
  const cities = prefetchUseCaseSafe({
    defaultValue: [],
    queryKey: [queriesKey.cities],
    fetchFn: () => cityUseCase.listAll.execute(),
    queryClient: queryClient,
  })

  await Promise.allSettled([generalAvailabilities, desiredPosition, cities])
  const dehydratedState = dehydrate(queryClient)

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
}
