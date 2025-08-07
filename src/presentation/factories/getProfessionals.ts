import { GetProfessionalsUseCase } from '@/application/useCases/getProfessionals'
import { KyGetProfessionalsService } from '@/infra/services/ky/getProfessionals'

export function getProfessionalsUseCaseFactory() {
  const service = new KyGetProfessionalsService()
  const useCase = new GetProfessionalsUseCase(service)

  return useCase
}
