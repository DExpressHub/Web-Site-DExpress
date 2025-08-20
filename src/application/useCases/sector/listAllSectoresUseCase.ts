import { ListAllSectorService } from '@/core/interfaces/sector'
import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { SectorResponse } from '@/core/types/sector'
import { handleApiError } from '@/application/utils/handleApiError'
export class ListAllSectoresUseCase {
  constructor(private readonly listAllSectorService: ListAllSectorService) {}
  async execute(): Promise<UseCaseResponse<SectorResponse>> {
    try {
      const sectores = await this.listAllSectorService.list()

      return {
        data: sectores,
        success: true,
      }
    } catch (err) {
      return {
        success: false,
        error: handleApiError(err),
      }
    }
  }
}
