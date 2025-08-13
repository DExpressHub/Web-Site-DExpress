import { ListAllGenderUseCase } from '@/application/useCases/gender/listAllGenderUseCase'
import { KyListAllGenderService } from '@/infra/services/ky/gender/kyListAllGenderService'

function listAllGenderCaseFactory() {
  const service = new KyListAllGenderService()
  const useCase = new ListAllGenderUseCase(service)

  return useCase
}

export const genderUseCase = {
  listAll: listAllGenderCaseFactory(),
}
