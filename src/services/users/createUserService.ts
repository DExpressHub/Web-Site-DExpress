// app/services/createUserService.ts
import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { CreateUserRequest, CreateUserResponse } from '@/types/users'
import { ServiceResponse } from '@/types/serviceResponse'

export async function createUserService(
  createUserRequest: CreateUserRequest,
): Promise<ServiceResponse<CreateUserResponse>> {
  try {
    const response = await api.post('users', { json: createUserRequest })
    const data = await response.json<CreateUserResponse>()

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
