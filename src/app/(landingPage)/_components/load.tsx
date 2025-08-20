import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { queriesKey } from '@/presentation/queriesKey'
import { getQueryClient } from '@/presentation/utils/queryClient'
import { prefetchUseCaseSafe } from '@/presentation/utils/prefetchUseCaseSafe'
import { desiredPositionUseCase } from '@/presentation/factories/useCase/desiredPosition'
import { cityUseCase } from '@/presentation/factories/useCase/city'
import { generalAvailabilityUseCase } from '@/presentation/factories/useCase/generalAvailability'
import { genderUseCase } from '@/presentation/factories/useCase/gender'
import { maritalStatusesUseCase } from '@/presentation/factories/useCase/maritalStatuses'
import { highestDegreeUseCase } from '@/presentation/factories/useCase/highestDegree'
import { coursesUseCase } from '@/presentation/factories/useCase/courses'
import { languagesUseCase } from '@/presentation/factories/useCase/language'
import { skillsUseCase } from '@/presentation/factories/useCase/skills'
import { experienceLevelsUseCase } from '@/presentation/factories/useCase/experienceLevel'
import { planUseCase } from '@/presentation/factories/useCase/plan'
import { sectorUseCase } from '@/presentation/factories/useCase/sector'

export async function LoadPageData({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  const prefetchConfigs = [
    {
      key: queriesKey.generalAvailabilities,
      fn: () => generalAvailabilityUseCase.listAll.execute(),
    },
    { key: queriesKey.desiredPosition, fn: () => desiredPositionUseCase.listAll.execute() },
    { key: queriesKey.cities, fn: () => cityUseCase.listAll.execute() },
    { key: queriesKey.gender, fn: () => genderUseCase.listAll.execute() },
    { key: queriesKey.martialStatus, fn: () => maritalStatusesUseCase.listAll.execute() },
    { key: queriesKey.highestDegree, fn: () => highestDegreeUseCase.listAll.execute() },
    { key: queriesKey.courses, fn: () => coursesUseCase.listAll.execute() },
    { key: queriesKey.languages, fn: () => languagesUseCase.listAll.execute() },
    { key: queriesKey.skills, fn: () => skillsUseCase.listAll.execute() },
    { key: queriesKey.experienceLevels, fn: () => experienceLevelsUseCase.listAll.execute() },
    { key: queriesKey.plans, fn: () => planUseCase.listAll.execute() },
    {
      key: queriesKey.sectores,
      fn: () => sectorUseCase.listAll.execute(),
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
