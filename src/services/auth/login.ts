import 'server-only'
import { LoginRequest, LoginResponse } from '@/types/auth'
import { ServiceResponse } from '@/types/serviceResponse'
import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'

export async function loginServices(
  loginRequest: LoginRequest,
): Promise<ServiceResponse<LoginResponse>> {
  try {
    const response = await api.post('auth/login', { json: loginRequest })
    const data = await response.json<LoginResponse>()

    return { success: true, data }
  } catch (error) {
    return { success: false, error: handleApiError(error) }
  }
}
