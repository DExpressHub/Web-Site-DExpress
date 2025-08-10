import { ListAllSpecialtiesService } from '@/core/interfaces/specialty'
import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { handleApiError } from '@/application/utils/handleApiError'
import { SpecialtiesListResponse } from '@/core/types/specialty'
export class ListAllSpecialtiesUseCase {
  constructor(private readonly listAllSpecialtiesService: ListAllSpecialtiesService) {}
  async execute(): Promise<UseCaseResponse<SpecialtiesListResponse>> {
    try {
      const specialties = await this.listAllSpecialtiesService.list()

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
