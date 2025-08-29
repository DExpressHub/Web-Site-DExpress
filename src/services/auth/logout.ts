import 'server-only'
import { handleApiError } from '@/utils/handleApiError'
import { api } from '@/lib/api'
import { ServiceResponse } from '@/types/serviceResponse'

export async function logoutServices(): Promise<ServiceResponse<void>> {
  try {
    const result = await api.post('auth/logout')
    const data = (await result.json()) as never

    return { success: true, data }
  } catch (err) {
    return { success: false, error: handleApiError(err) }
  }
}
