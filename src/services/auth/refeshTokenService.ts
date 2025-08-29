import 'server-only'

import { ServiceResponse } from '@/types/serviceResponse'
import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError copy'
import { ValidateAuthResponse } from '@/types/auth'

export async function refreshTokenService(): Promise<ServiceResponse<ValidateAuthResponse>> {
  try {
    const response = await api.post('auth/refresh')
    const result = await response.json<ValidateAuthResponse>()

    console.log(result, 'refresh token')

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
