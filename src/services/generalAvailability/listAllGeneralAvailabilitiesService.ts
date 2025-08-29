import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { GeneralAvailabilityListResponse } from '@/types/generalAvailability'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listAllGeneralAvailabilitiesService(): Promise<
  ServiceResponse<GeneralAvailabilityListResponse>
> {
  try {
    const response = await api.get('general-availabilities/list')
    const data = await response.json<GeneralAvailabilityListResponse>()

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
