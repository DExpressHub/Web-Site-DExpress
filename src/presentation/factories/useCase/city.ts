import { ListAllCitiesUseCase } from '@/application/useCases/city/listAllCitiesUseCase'
import { KyListAllCitiesService } from '@/infra/services/ky/city/kyListAllCitiesService'

function listAllCitiesUseCaseFactory() {
  const kyListAllCitiesService = new KyListAllCitiesService()
  const useCase = new ListAllCitiesUseCase(kyListAllCitiesService)

  return useCase
}

export const cityUseCase = {
  listAll: listAllCitiesUseCaseFactory(),
}
