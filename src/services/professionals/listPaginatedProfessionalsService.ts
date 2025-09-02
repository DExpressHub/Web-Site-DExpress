import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { FiltersProfessional, PaginatedProfissionalResponse } from '@/types/professional'
import { buildQueryParams } from '@/utils/buildQueryParams'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listPaginatedProfessionalService(
  filters?: FiltersProfessional,
): Promise<ServiceResponse<PaginatedProfissionalResponse>> {
  try {
    const queryString = buildQueryParams(filters)
    const url = queryString
      ? `professionals/public-professionals?${queryString}`
      : 'professionals/public-professionals'

    const response = await api(url)
    const result = await response.json<PaginatedProfissionalResponse>()

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
