import { GetSpecialtiesUseCase } from '@/application/useCases/getSpecialties'
import { KyGetSpecialtiesService } from '@/infra/services/ky/getSpecialties'

export function getSpecialtiesUseCaseFactory() {
  const getSpeciaLtiesService = new KyGetSpecialtiesService()
  const useCase = new GetSpecialtiesUseCase(getSpeciaLtiesService)

  return useCase
}
