import { api } from '../api'

import { ListPaginatedSpecialtiesService } from '@/core/interfaces/specialty'
import { PaginatedSpecialtiesParams, PaginatedSpecialtiesResponse } from '@/core/types/specialty'
import { buildQueryParams } from '@/infra/utils/buildQueryParams'

export class KyListPaginatedSpecialtiesService implements ListPaginatedSpecialtiesService {
  async list(params?: PaginatedSpecialtiesParams): Promise<PaginatedSpecialtiesResponse> {
    const queryString = buildQueryParams(params)
    const url = queryString ? `specialties?${queryString}` : 'cities'

    const response = await api(url)

    return (await response.json()) as PaginatedSpecialtiesResponse
  }
}
