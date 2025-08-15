import { ListAllMaritalStatusesUseCase } from '@/application/useCases/martialStatuses/listAllMaritalStatusesUseCase'
import { KyListAllMaritalStatusesService } from '@/infra/services/ky/maritalStatuses/kyListAllMaritalStatusesService'

function listAllMaritalStatusesUseCaseFactory() {
  const service = new KyListAllMaritalStatusesService()
  const useCase = new ListAllMaritalStatusesUseCase(service)

  return useCase
}

export const maritalStatusesUseCase = {
  listAll: listAllMaritalStatusesUseCaseFactory(),
}
