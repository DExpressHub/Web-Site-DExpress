import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { ProfessionalDetails } from '@/types/professional'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listProfessionalByIdService(
  id: string,
): Promise<ServiceResponse<ProfessionalDetails>> {
  try {
    const response = await api(`professionals/${id}`)
    const result = await response.json<ProfessionalDetails>()

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
