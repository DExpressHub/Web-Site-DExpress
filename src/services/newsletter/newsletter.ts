import 'server-only'

import { ServiceResponse } from '@/types/serviceResponse'
import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'

export async function newsletterServices(
  email: string,
): Promise<ServiceResponse<{ message: string }>> {
  try {
    const response = await api.post('newsletter', { json: { email } })
    const data = await response.json<{ message: string }>()

    return { success: true, data }
  } catch (error) {
    return { success: false, error: handleApiError(error) }
  }
}
