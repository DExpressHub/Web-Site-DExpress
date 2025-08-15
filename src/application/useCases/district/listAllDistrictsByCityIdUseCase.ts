import { ListAllDistrictsByCityIdService } from '@/core/interfaces/district'
import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { DistrictResponse } from '@/core/types/district'
import { handleApiError } from '@/application/utils/handleApiError'
export class ListAllDistrictsByCityIdUseCase {
  constructor(private readonly listAllDistrictsByCityIdService: ListAllDistrictsByCityIdService) {}
  async execute(cityId: string): Promise<UseCaseResponse<DistrictResponse>> {
    try {
      const districts = await this.listAllDistrictsByCityIdService.list(cityId)

      return {
        data: districts,
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
