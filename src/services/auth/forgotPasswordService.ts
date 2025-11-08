import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { ForgotPasswordRequest, ForgotPasswordResponse } from '@/types/auth'
import { ServiceResponse } from '@/types/serviceResponse'

export async function forgotPasswordService(
  forgotPasswordRequest: ForgotPasswordRequest,
): Promise<ServiceResponse<ForgotPasswordResponse>> {
  try {
    const response = await api.post('auth/forgot-password', {
      json: forgotPasswordRequest,
    })

    const data = await response.json<ForgotPasswordResponse>()

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
