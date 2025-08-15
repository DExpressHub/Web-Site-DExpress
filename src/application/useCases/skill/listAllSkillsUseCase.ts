import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { handleApiError } from '@/application/utils/handleApiError'
import { SkillListResponse } from '@/core/types/skill'
import { ListAllSkillsService } from '@/core/interfaces/skill'

export class ListAllSkillsUseCase {
  constructor(private readonly service: ListAllSkillsService) {}

  async execute(): Promise<UseCaseResponse<SkillListResponse>> {
    try {
      const skills = await this.service.list()

      return {
        data: skills,
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
