import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { DesiredPositionListResponse } from '@/types/desiredPosition'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listAllDesiredPositionsService(): Promise<
  ServiceResponse<DesiredPositionListResponse>
> {
  try {
    const response = await api.get('desired-positions/list')
    const data = await response.json<DesiredPositionListResponse>()

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
