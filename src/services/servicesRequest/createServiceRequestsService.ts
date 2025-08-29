import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { CreateServiceRequestParams } from '@/types/serviceRequest'
import { ServiceResponse } from '@/types/serviceResponse'

export async function createServiceRequestService(
  data: CreateServiceRequestParams,
): Promise<ServiceResponse<void>> {
  try {
    await api.post('service-requests', { json: data })

    return {
      success: true,
      data: undefined,
    }
  } catch (error) {
    return {
      success: false,
      error: handleApiError(error),
    }
  }
}
