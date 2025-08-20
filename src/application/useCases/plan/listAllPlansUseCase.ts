import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { handleApiError } from '@/application/utils/handleApiError'
import { ListAllPlansService } from '@/core/interfaces/plan'
import { PlansListResponse } from '@/core/types/plan'
export class ListAllPlansUseCase {
  constructor(private readonly listAllPlansService: ListAllPlansService) {}
  async execute(): Promise<UseCaseResponse<PlansListResponse>> {
    try {
      const plans = await this.listAllPlansService.list()

      return {
        data: plans,
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
