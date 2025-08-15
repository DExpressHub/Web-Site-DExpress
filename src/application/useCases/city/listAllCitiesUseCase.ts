import { ListAllCitiesService } from '@/core/interfaces/city'
import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { CitiesListResponse } from '@/core/types/city'
import { handleApiError } from '@/application/utils/handleApiError'
export class ListAllCitiesUseCase {
  constructor(private readonly listAllCitiesService: ListAllCitiesService) {}
  async execute(): Promise<UseCaseResponse<CitiesListResponse>> {
    try {
      const cities = await this.listAllCitiesService.list()

      return {
        data: cities,
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
