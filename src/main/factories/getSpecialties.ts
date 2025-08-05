import { GetSpecialtiesUseCase } from '@/application/useCases/getSpecialties'
import { NextFetchGetSpecialtiesService } from '@/infra/services/getSpecialties'

export function getSpecialtiesUseCaseFactory(init?: {
  revalidate?: number | false
  tags?: string[]
}) {
  const getSpeciaLtiesService = new NextFetchGetSpecialtiesService(init)
  const useCase = new GetSpecialtiesUseCase(getSpeciaLtiesService)

  return useCase
}
