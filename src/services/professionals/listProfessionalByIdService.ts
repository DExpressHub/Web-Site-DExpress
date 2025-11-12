import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { type Profissional } from '@/types/professional'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listProfessionalByIdService(
  id: string,
): Promise<ServiceResponse<Profissional>> {
  try {
    const response = await api(`professionals/${id}`)
    const result = await response.json<Profissional>()

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
