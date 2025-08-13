import { ExperienceLevelListResponse } from '../types/experienceLevel'

export interface ListAllExperienceLevelsService {
  list(): Promise<ExperienceLevelListResponse>
}
