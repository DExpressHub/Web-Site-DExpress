import { ListAllSpecialtiesUseCase } from '@/application/useCases/specialty/listAllSpecialtiesUseCase'
import { KyListAllSpecialtiesService } from '@/infra/services/ky/specialty/kyListAllSpecialtiesService'

function listAllSpecialtiesUseCaseFactory() {
  const service = new KyListAllSpecialtiesService()
  const useCase = new ListAllSpecialtiesUseCase(service)

  return useCase
}

export const specialtyUseCase = {
  listAll: listAllSpecialtiesUseCaseFactory(),
}
