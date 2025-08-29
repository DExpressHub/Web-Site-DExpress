import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { MaritalStatusesListResponse } from '@/types/maritalStatuses'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listAllMaritalStatusesService(): Promise<
  ServiceResponse<MaritalStatusesListResponse>
> {
  try {
    const response = await api.get('marital-statuses/list')
    const data = await response.json<MaritalStatusesListResponse>()

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
