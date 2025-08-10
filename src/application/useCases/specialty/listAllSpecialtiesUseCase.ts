import { ListAllDesiredPositionService } from '@/core/interfaces/desiredPosition'
import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { handleApiError } from '@/application/utils/handleApiError'
import { DesiredPositionListResponse } from '@/core/types/desiredPosition'
export class ListAllDesiredPositionUseCase {
  constructor(private readonly listAllDesiredPositionService: ListAllDesiredPositionService) {}
  async execute(): Promise<UseCaseResponse<DesiredPositionListResponse>> {
    try {
      const specialties = await this.listAllDesiredPositionService.list()

      return {
        data: specialties,
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
