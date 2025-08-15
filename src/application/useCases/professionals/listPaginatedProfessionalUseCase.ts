import { ListPaginatedProfessionalService } from '@/core/interfaces/professionals'
import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { FiltersProfessional, PaginatedProfissionalResponse } from '@/core/types/professional'
import { handleApiError } from '@/application/utils/handleApiError'
export class ListPaginatedProfessionalUseCase {
  constructor(
    private readonly listPaginatedProfessionalService: ListPaginatedProfessionalService,
  ) {}
  async execute(
    filters?: FiltersProfessional,
  ): Promise<UseCaseResponse<PaginatedProfissionalResponse>> {
    try {
      const data = await this.listPaginatedProfessionalService.list(filters)

      return {
        data: data,
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
