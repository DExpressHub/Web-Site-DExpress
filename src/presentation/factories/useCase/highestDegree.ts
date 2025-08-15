import { ListAllHighestDegreeUseCase } from '@/application/useCases/highestDegree/listAllHighestDegreeUseCase'
import { KyListAllHighestDegreeService } from '@/infra/services/ky/highestDegree/kyListAllHighestDegreeService'

function listAllHighestDegreeCaseFactory() {
  const service = new KyListAllHighestDegreeService()
  const useCase = new ListAllHighestDegreeUseCase(service)

  return useCase
}

export const highestDegreeUseCase = {
  listAll: listAllHighestDegreeCaseFactory(),
}
