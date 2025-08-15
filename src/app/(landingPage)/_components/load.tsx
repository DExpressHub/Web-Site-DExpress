import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { desiredPositionUseCase } from '@/presentation/factories/useCase/desiredPosition'
import { cityUseCase } from '@/presentation/factories/useCase/city'
import { generalAvailabilityUseCase } from '@/presentation/factories/useCase/generalAvailability'
import { queriesKey } from '@/presentation/queriesKey'
import { getQueryClient } from '@/presentation/utils/queryClient'
import { prefetchUseCaseSafe } from '@/presentation/utils/prefetchUseCaseSafe'
import { genderUseCase } from '@/presentation/factories/useCase/gender'
import { maritalStatusesUseCase } from '@/presentation/factories/useCase/maritalStatuses'
import { highestDegreeUseCase } from '@/presentation/factories/useCase/highestDegree'
import { coursesUseCase } from '@/presentation/factories/useCase/courses'
import { languagesUseCase } from '@/presentation/factories/useCase/language'
import { skillsUseCase } from '@/presentation/factories/useCase/skills'
import { experienceLevelsUseCase } from '@/presentation/factories/useCase/experienceLevel'
export async function LoadPageData({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  const generalAvailabilities = prefetchUseCaseSafe({
    defaultValue: [],
    queryKey: [queriesKey.generalAvailabilities],
    fetchFn: () => generalAvailabilityUseCase.listAll.execute(),
    queryClient: queryClient,
    retry: 2,
  })
  const desiredPosition = prefetchUseCaseSafe({
    defaultValue: [],
    queryKey: [queriesKey.desiredPosition],
    fetchFn: () => desiredPositionUseCase.listAll.execute(),
    queryClient: queryClient,
    retry: 2,
  })
  const cities = prefetchUseCaseSafe({
    defaultValue: [],
    queryKey: [queriesKey.cities],
    fetchFn: () => cityUseCase.listAll.execute(),
    queryClient: queryClient,
    retry: 2,
  })
  const genders = prefetchUseCaseSafe({
    defaultValue: [],
    queryKey: [queriesKey.gender],
    fetchFn: () => genderUseCase.listAll.execute(),
    queryClient: queryClient,
    retry: 2,
  })
  const martialStatus = prefetchUseCaseSafe({
    defaultValue: [],
    queryKey: [queriesKey.martialStatus],
    fetchFn: () => maritalStatusesUseCase.listAll.execute(),
    queryClient: queryClient,
    retry: 2,
  })
  const highestDegree = prefetchUseCaseSafe({
    defaultValue: [],
    queryKey: [queriesKey.highestDegree],
    fetchFn: () => highestDegreeUseCase.listAll.execute(),
    queryClient: queryClient,
    retry: 2,
  })
  const courses = prefetchUseCaseSafe({
    defaultValue: [],
    queryKey: [queriesKey.courses],
    fetchFn: () => coursesUseCase.listAll.execute(),
    queryClient: queryClient,
    retry: 2,
  })
  const languages = prefetchUseCaseSafe({
    defaultValue: [],
    queryKey: [queriesKey.languages],
    fetchFn: () => languagesUseCase.listAll.execute(),
    queryClient: queryClient,
    retry: 2,
  })
  const skills = prefetchUseCaseSafe({
    defaultValue: [],
    queryKey: [queriesKey.skills],
    fetchFn: () => skillsUseCase.listAll.execute(),
    queryClient: queryClient,
    retry: 2,
  })
  const experienceLevels = prefetchUseCaseSafe({
    defaultValue: [],
    queryKey: [queriesKey.experienceLevels],
    fetchFn: () => experienceLevelsUseCase.listAll.execute(),
    queryClient: queryClient,
    retry: 2,
  })

  await Promise.allSettled([
    generalAvailabilities,
    desiredPosition,
    cities,
    genders,
    martialStatus,
    highestDegree,
    courses,
    languages,
    skills,
    experienceLevels,
  ])
  const dehydratedState = dehydrate(queryClient)

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
}
