import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { PlansListResponse } from '@/types/plan'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listAllPlansService(): Promise<ServiceResponse<PlansListResponse>> {
  try {
    const response = await api.get('packages/list')
    const data = await response.json<PlansListResponse>()

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
