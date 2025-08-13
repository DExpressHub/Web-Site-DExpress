import { api } from '../api'

import { ListAllSkillsService } from '@/core/interfaces/skill'
import { SkillListResponse } from '@/core/types/skill'

export class KyListAllSkillsService implements ListAllSkillsService {
  async list(): Promise<SkillListResponse> {
    const response = await api('skills/list')

    return (await response.json()) as SkillListResponse
  }
}
