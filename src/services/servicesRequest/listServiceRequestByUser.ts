import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { ServiceResponse } from '@/types/serviceResponse'
import { GetUserServiceRequest } from '@/types/serviceRequest'

export async function listServiceRequestsByUserIdService(
  userId: string,
): Promise<ServiceResponse<GetUserServiceRequest>> {
  try {
    const response = await api.get<GetUserServiceRequest>(`service-requests/user/${userId}`)
    const data = await response.json()

    return {
      success: true,
      data: data,
    }
  } catch (error) {
    return {
      success: false,
      error: handleApiError(error),
    }
  }
}
