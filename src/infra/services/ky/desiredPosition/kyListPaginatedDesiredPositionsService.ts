import { api } from '../api'

import { ListPaginatedDesiredPositionsService } from '@/core/interfaces/desiredPosition'
import {
  DesiredPositionFilters,
  PaginatedDesiredPositionResponse,
} from '@/core/types/desiredPosition'
import { buildQueryParams } from '@/infra/utils/buildQueryParams'

export class KyListPaginatedDesiredPositionsService
  implements ListPaginatedDesiredPositionsService
{
  async list(filters?: DesiredPositionFilters): Promise<PaginatedDesiredPositionResponse> {
    const queryString = buildQueryParams(filters)
    const url = queryString ? `specialties?${queryString}` : 'cities'

    const response = await api(url)

    return (await response.json()) as PaginatedDesiredPositionResponse
  }
}
