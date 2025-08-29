import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { SkillListResponse } from '@/types/skill'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listAllSkillsService(): Promise<ServiceResponse<SkillListResponse>> {
  try {
    const response = await api.get('skills/list')
    const data = await response.json<SkillListResponse>()

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
