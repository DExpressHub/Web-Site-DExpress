import { ListAllExperienceLevelsUseCase } from '@/application/useCases/experienceLevel/listAllExperienceLevelsUseCase'
import { KyListAllExperienceLevelsService } from '@/infra/services/ky/experienceLevel/kyListAllExperienceLevelsService'

function listAllExperienceLevelsCaseFactory() {
  const service = new KyListAllExperienceLevelsService()
  const useCase = new ListAllExperienceLevelsUseCase(service)

  return useCase
}

export const experienceLevelsUseCase = {
  listAll: listAllExperienceLevelsCaseFactory(),
}
