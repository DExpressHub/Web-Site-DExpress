import { api } from '../api'

import { ListAllMaritalStatusesService } from '@/core/interfaces/maritalStatuses'
import { MaritalStatusesListResponse } from '@/core/types/maritalStatuses'

export class KyListAllMaritalStatusesService implements ListAllMaritalStatusesService {
  async list(): Promise<MaritalStatusesListResponse> {
    const response = await api('marital-statuses/list')

    return (await response.json()) as MaritalStatusesListResponse
  }
}
