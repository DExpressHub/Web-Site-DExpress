import { ListAllDesiredPositionUseCase } from '@/application/useCases/specialty/listAllSpecialtiesUseCase'
import { KyListAllDesiredPositionService } from '@/infra/services/ky/desiredPosition/kyListAllDesiredPositionService'

function listAllDesiredPositionCaseFactory() {
  const service = new KyListAllDesiredPositionService()
  const useCase = new ListAllDesiredPositionUseCase(service)

  return useCase
}

export const desiredPositionUseCase = {
  listAll: listAllDesiredPositionCaseFactory(),
}
