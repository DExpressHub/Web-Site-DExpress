// app/services/getCurrentUserService.ts
import 'server-only'

import { api, RefreshTokenExpiredError } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { ServiceResponse } from '@/types/serviceResponse'
import { GetCurrentUserResponse } from '@/types/users'

export async function getCurrentUserService(): Promise<ServiceResponse<GetCurrentUserResponse>> {
  try {
    const response = await api.get('users/curent')
    const data = await response.json<GetCurrentUserResponse>()

    return {
      success: true,
      data,
    }
  } catch (error) {
    if (error instanceof RefreshTokenExpiredError) {
      throw error
    }

    return {
      success: false,
      error: handleApiError(error),
    }
  }
}
