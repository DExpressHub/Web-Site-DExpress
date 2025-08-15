import { SkillListResponse } from '../types/skill'

export interface ListAllSkillsService {
  list(): Promise<SkillListResponse>
}
