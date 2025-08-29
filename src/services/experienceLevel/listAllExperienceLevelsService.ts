import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { ExperienceLevelListResponse } from '@/types/experienceLevel'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listAllExperienceLevelsService(): Promise<
  ServiceResponse<ExperienceLevelListResponse>
> {
  try {
    const response = await api.get('experience-levels/list')
    const data = await response.json<ExperienceLevelListResponse>()

    return {
      success: true,
      data,
    }
  } catch (error) {
    return {
      success: false,
      error: handleApiError(error),
    }
  }
}
