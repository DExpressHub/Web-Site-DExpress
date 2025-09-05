// app/services/getCurrentUserService.ts
import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { ServiceResponse } from '@/types/serviceResponse'
import { GetCurrentUserResponse } from '@/types/users'
import { UnauthorizedError } from '@/errors'

export async function getCurrentUserService(): Promise<ServiceResponse<GetCurrentUserResponse>> {
  try {
    const response = await api.get('users/curent')
    const data = await response.json<GetCurrentUserResponse>()

    return {
      success: true,
      data,
    }
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      throw error
    }

    return {
      success: false,
      error: handleApiError(error),
    }
  }
}
