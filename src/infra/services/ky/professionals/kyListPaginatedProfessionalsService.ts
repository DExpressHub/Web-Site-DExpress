import { api } from '../api'

import { ListPaginatedProfessionalService } from '@/core/interfaces/professionals'
import { FiltersProfessional, PaginatedProfissionalResponse } from '@/core/types/professional'
import { buildQueryParams } from '@/infra/utils/buildQueryParams'

export class KyListPaginatedProfessionalService implements ListPaginatedProfessionalService {
  async list(filters?: FiltersProfessional): Promise<PaginatedProfissionalResponse> {
    const queryString = buildQueryParams(filters)
    const url = queryString ? `professionals?${queryString}` : 'professionals'

    const response = await api(url)

    return (await response.json()) as PaginatedProfissionalResponse
  }
}
