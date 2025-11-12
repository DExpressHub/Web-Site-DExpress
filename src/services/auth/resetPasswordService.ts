// src/services/auth/resetPasswordService.ts
import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { ServiceResponse } from '@/types/serviceResponse'

export type ResetPasswordRequest = {
  token: string
  password: string
}

export type ResetPasswordResponse = {
  message: string
}

export async function resetPasswordService({
  token,
  ...data
}: ResetPasswordRequest): Promise<ServiceResponse<ResetPasswordResponse>> {
  try {
    const response = await api.patch(`auth/reset-password/${token}`, {
      json: data,
    })

    const result = await response.json<ResetPasswordResponse>()

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
