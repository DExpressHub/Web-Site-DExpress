import { api } from '../api'

import { ListPaginatedCitiesService } from '@/core/interfaces/city'
import { PaginatedCitiesParams, PaginatedCitiesResponse } from '@/core/types/city'
import { buildQueryParams } from '@/infra/utils/buildQueryParams'

export class KyListPaginatedCitiesService implements ListPaginatedCitiesService {
  async list(params?: PaginatedCitiesParams): Promise<PaginatedCitiesResponse> {
    const queryString = buildQueryParams(params)
    const url = queryString ? `cities?${queryString}` : 'cities'

    const response = await api(url)

    return (await response.json()) as PaginatedCitiesResponse
  }
}
