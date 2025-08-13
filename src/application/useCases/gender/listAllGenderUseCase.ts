import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { handleApiError } from '@/application/utils/handleApiError'
import { DesiredPositionListResponse } from '@/core/types/desiredPosition'
import { ListAllGenderService } from '@/core/interfaces/gender'
export class ListAllGenderUseCase {
  constructor(private readonly listAllGenderService: ListAllGenderService) {}
  async execute(): Promise<UseCaseResponse<DesiredPositionListResponse>> {
    try {
      const gender = await this.listAllGenderService.list()

      return {
        data: gender,
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
