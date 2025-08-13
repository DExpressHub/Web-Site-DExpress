import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { handleApiError } from '@/application/utils/handleApiError'
import { MaritalStatusesListResponse } from '@/core/types/maritalStatuses'
import { ListAllMaritalStatusesService } from '@/core/interfaces/maritalStatuses'
export class ListAllMaritalStatusesUseCase {
  constructor(private readonly listAllMaritalStatusesService: ListAllMaritalStatusesService) {}
  async execute(): Promise<UseCaseResponse<MaritalStatusesListResponse>> {
    try {
      const gender = await this.listAllMaritalStatusesService.list()

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
