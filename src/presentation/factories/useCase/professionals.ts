import { ListPaginatedProfessionalUseCase } from '@/application/useCases/professionals/listPaginatedProfessionalUseCase'
import { KyListPaginatedProfessionalService } from '@/infra/services/ky/professionals/kyListPaginatedProfessionalsService'

function listPaginatedProfessionalUseCaseFactory() {
  const kyListAllCitiesService = new KyListPaginatedProfessionalService()
  const useCase = new ListPaginatedProfessionalUseCase(kyListAllCitiesService)

  return useCase
}

export const professionalUseCase = {
  listAll: listPaginatedProfessionalUseCaseFactory(),
}
