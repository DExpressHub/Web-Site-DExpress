import { ListAllLanguagesUseCase } from '@/application/useCases/language/listAllLanguagesUseCase'
import { KyListAllLanguagesService } from '@/infra/services/ky/language/kyListAllLanguagesService'

function listAllLanguagesCaseFactory() {
  const service = new KyListAllLanguagesService()
  const useCase = new ListAllLanguagesUseCase(service)

  return useCase
}

export const languagesUseCase = {
  listAll: listAllLanguagesCaseFactory(),
}
