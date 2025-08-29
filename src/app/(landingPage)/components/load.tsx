import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { queriesKey } from '@/utils/queriesKey'
import { getQueryClient } from '@/utils/queryClient'
import { prefetchUseCaseSafe } from '@/utils/prefetchUseCaseSafe'
import { ListAllGeneralAvailabilitiesAction } from '@/actions/generalAvailability'
import { listAllSectorsAction } from '@/actions/sector'
import { listAllDesiredPositionsService } from '@/services/desiredPosition/listAllDesiredPositionService'
import { listAllCitiesService } from '@/services/city/listAllCitiesService'
import { listAllGenderService } from '@/services/gender/listAllGenderService'
import { listAllMaritalStatusesService } from '@/services/maritalStatuses/listAllMaritalStatusesService'
import { listAllHighestDegreesService } from '@/services/highestDegree/listAllHighestDegreesService'
import { listAllLanguagesService } from '@/services/language/listAllLanguagesService'
import { listAllSkillsService } from '@/services/skill/listAllSkillsService'
import { listAllExperienceLevelsService } from '@/services/experienceLevel/listAllExperienceLevelsService'
import { listAllPlansService } from '@/services/plan/listAllPlansService'

export async function LoadPageData({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  const prefetchConfigs = [
    {
      key: queriesKey.generalAvailabilities,
      fn: () => ListAllGeneralAvailabilitiesAction(),
    },
    { key: queriesKey.desiredPosition, fn: () => listAllDesiredPositionsService() },
    { key: queriesKey.cities, fn: () => listAllCitiesService() },
    { key: queriesKey.gender, fn: () => listAllGenderService() },
    { key: queriesKey.martialStatus, fn: () => listAllMaritalStatusesService() },
    { key: queriesKey.highestDegree, fn: () => listAllHighestDegreesService() },
    { key: queriesKey.courses, fn: () => listAllCitiesService() },
    { key: queriesKey.languages, fn: () => listAllLanguagesService() },
    { key: queriesKey.skills, fn: () => listAllSkillsService() },
    { key: queriesKey.experienceLevels, fn: () => listAllExperienceLevelsService() },
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
