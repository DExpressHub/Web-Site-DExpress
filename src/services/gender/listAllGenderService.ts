import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { GenderListResponse } from '@/types/gender'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listAllGenderService(): Promise<ServiceResponse<GenderListResponse>> {
  try {
    const response = await api.get('genders/list')
    const data = await response.json<GenderListResponse>()

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
