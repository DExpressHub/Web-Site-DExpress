import 'server-only'

import { ServiceResponse } from '@/types/serviceResponse'
import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { ValidateAuthResponse } from '@/types/auth'

export async function validateAuthService(): Promise<ServiceResponse<ValidateAuthResponse>> {
  try {
    const response = await api.get('auth/validate')
    const result = await response.json<ValidateAuthResponse>()

    return {
      success: true,
      data: result,
    }
  } catch (error) {
    return {
      success: false,
      error: handleApiError(error),
    }
  }
}
