import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { HighestDegreeListResponse } from '@/types/highestDegree'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listAllHighestDegreesService(): Promise<
  ServiceResponse<HighestDegreeListResponse>
> {
  try {
    const response = await api.get('highest-degrees/list')
    const data = await response.json<HighestDegreeListResponse>()

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
