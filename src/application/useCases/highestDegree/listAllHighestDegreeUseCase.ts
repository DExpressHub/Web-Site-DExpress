import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { handleApiError } from '@/application/utils/handleApiError'
import { HighestDegreeListResponse } from '@/core/types/highestDegree'
import { ListAllHighestDegreeService } from '@/core/interfaces/highestDegree'

export class ListAllHighestDegreeUseCase {
  constructor(private readonly service: ListAllHighestDegreeService) {}

  async execute(): Promise<UseCaseResponse<HighestDegreeListResponse>> {
    try {
      const degrees = await this.service.list()

      return {
        data: degrees,
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
