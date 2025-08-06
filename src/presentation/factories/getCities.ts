import { GetCitiesUseCase } from '@/application/useCases/getCities'
import { KyGetCitiesService } from '@/infra/services/ky/getCities'

export function getCitiesUseCaseFactory() {
  const getSpeciaLtiesService = new KyGetCitiesService()
  const useCase = new GetCitiesUseCase(getSpeciaLtiesService)

  return useCase
}
