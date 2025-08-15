import { ListAllGeneralAvailabilitiesUseCase } from '@/application/useCases/generalAvailability/listAllGeneralAvailabilitiesUseCase'
import { KyListAllGeneralAvailabilitiesService } from '@/infra/services/ky/generalAvailability/kyListAllGeneralAvailabilitiesService'

function listAllGeneralAvailabilitiesUseCaseFactory() {
  const service = new KyListAllGeneralAvailabilitiesService()

  return new ListAllGeneralAvailabilitiesUseCase(service)
}

export const generalAvailabilityUseCase = {
  listAll: listAllGeneralAvailabilitiesUseCaseFactory(),
}
