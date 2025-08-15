import { ListAllDistrictsByCityIdUseCase } from '@/application/useCases/district/listAllDistrictsByCityIdUseCase'
import { KyListAllDistrictsByCityIdService } from '@/infra/services/ky/district/kyListAllDistrictsByCityIdService'

function listAllDistrictsByCityIdUseCaseFactory() {
  const service = new KyListAllDistrictsByCityIdService()
  const useCase = new ListAllDistrictsByCityIdUseCase(service)

  return useCase
}

export const districtUseCase = {
  listAllDistrictsByCityId: listAllDistrictsByCityIdUseCaseFactory(),
}
