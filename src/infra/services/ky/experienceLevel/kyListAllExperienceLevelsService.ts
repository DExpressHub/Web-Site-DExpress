import { api } from '../api'

import { ListAllExperienceLevelsService } from '@/core/interfaces/experienceLevel'
import { ExperienceLevelListResponse } from '@/core/types/experienceLevel'

export class KyListAllExperienceLevelsService implements ListAllExperienceLevelsService {
  async list(): Promise<ExperienceLevelListResponse> {
    const response = await api('experience-levels/list')

    return (await response.json()) as ExperienceLevelListResponse
  }
}
