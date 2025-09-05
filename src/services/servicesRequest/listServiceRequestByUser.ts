import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { ServiceResponse } from '@/types/serviceResponse'
import { ServiceRequestIndividual } from '@/types/serviceRequest'

export async function listServiceRequestsByUserIdService(
  userId: string,
): Promise<ServiceResponse<ServiceRequestIndividual[]>> {
  try {
    const response = await api.get<{ data: ServiceRequestIndividual[] }>(
      `service-requests/user/${userId}`,
    )
    const data = await response.json()

    return {
      success: true,
      data: data.data,
    }
  } catch (error) {
    return {
      success: false,
      error: handleApiError(error),
    }
  }
}
