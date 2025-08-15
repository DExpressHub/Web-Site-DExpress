import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { handleApiError } from '@/application/utils/handleApiError'
import { ExperienceLevelListResponse } from '@/core/types/experienceLevel'
import { ListAllExperienceLevelsService } from '@/core/interfaces/experienceLevel'

export class ListAllExperienceLevelsUseCase {
  constructor(private readonly service: ListAllExperienceLevelsService) {}

  async execute(): Promise<UseCaseResponse<ExperienceLevelListResponse>> {
    try {
      const levels = await this.service.list()

      return {
        data: levels,
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
