import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { DistrictResponse } from '@/types/district'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listAllDistrictsByCityIdService(
  cityId: string,
): Promise<ServiceResponse<DistrictResponse>> {
  try {
    const response = await api.get(`districts/${cityId}/city`)
    const data = await response.json<DistrictResponse>()

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
