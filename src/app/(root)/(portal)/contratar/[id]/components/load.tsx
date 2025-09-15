import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { queriesKey } from '@/utils/queriesKey'
import { getQueryClient } from '@/utils/queryClient'
import { prefetchUseCaseSafe } from '@/utils/prefetchUseCaseSafe'
import { listAllSectorsAction } from '@/actions/sector'
import { listAllCitiesService } from '@/services/city/listAllCitiesService'
import { listAllPlansService } from '@/services/plan/listAllPlansService'

export async function LoadHireData({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  const prefetchConfigs = [
    { key: queriesKey.cities, fn: () => listAllCitiesService() },

    { key: queriesKey.plans, fn: () => listAllPlansService() },
    {
      key: queriesKey.sectores,
      fn: () => listAllSectorsAction(),
    },
  ]

  await Promise.allSettled(
    prefetchConfigs.map(({ key, fn }) =>
      prefetchUseCaseSafe({
        defaultValue: [],
        queryKey: [key],
        fetchFn: fn,
        queryClient,
        retry: 2,
      }),
    ),
  )

  const dehydratedState = dehydrate(queryClient)

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
}
