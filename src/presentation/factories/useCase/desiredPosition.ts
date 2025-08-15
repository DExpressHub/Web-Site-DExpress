import { ListAllDesiredPositionUseCase } from '@/application/useCases/desiredPosition/listAllDesiredPositionUseCase'
import { KyListAllDesiredPositionService } from '@/infra/services/ky/desiredPosition/kyListAllDesiredPositionService'

function listAllDesiredPositionCaseFactory() {
  const service = new KyListAllDesiredPositionService()
  const useCase = new ListAllDesiredPositionUseCase(service)

  return useCase
}

export const desiredPositionUseCase = {
  listAll: listAllDesiredPositionCaseFactory(),
}
