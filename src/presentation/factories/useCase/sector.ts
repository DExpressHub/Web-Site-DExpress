import { ListAllSectoresUseCase } from '@/application/useCases/sector/listAllSectoresUseCase'
import { KyListAllSectorService } from '@/infra/services/ky/sector/kyListAllSectoresService'

function listAllSectoresUseCaseFactory() {
  const kyListAllCitiesService = new KyListAllSectorService()
  const useCase = new ListAllSectoresUseCase(kyListAllCitiesService)

  return useCase
}

export const sectorUseCase = {
  listAll: listAllSectoresUseCaseFactory(),
}
