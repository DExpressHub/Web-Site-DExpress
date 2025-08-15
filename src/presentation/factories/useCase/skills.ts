import { ListAllSkillsUseCase } from '@/application/useCases/skill/listAllSkillsUseCase'
import { KyListAllSkillsService } from '@/infra/services/ky/skill/kyListAllSkillsService'

function listAllSkillsCaseFactory() {
  const service = new KyListAllSkillsService()
  const useCase = new ListAllSkillsUseCase(service)

  return useCase
}

export const skillsUseCase = {
  listAll: listAllSkillsCaseFactory(),
}
