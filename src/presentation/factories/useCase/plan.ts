import { ListAllPlansUseCase } from '@/application/useCases/plan/listAllPlansUseCase'
import { KyListAllPlansService } from '@/infra/services/ky/plan/kyListAllPlansService'

function listAllPlansUseCaseFactory() {
  const kyListAllPlansService = new KyListAllPlansService()
  const useCase = new ListAllPlansUseCase(kyListAllPlansService)

  return useCase
}

export const planUseCase = {
  listAll: listAllPlansUseCaseFactory(),
}
