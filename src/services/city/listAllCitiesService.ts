import 'server-only'
import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { CitiesListResponse } from '@/types/city'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listAllCitiesService(): Promise<ServiceResponse<CitiesListResponse>> {
  try {
    const response = await api.get('cities/list')
    const data = await response.json<CitiesListResponse>()

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
