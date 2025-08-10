import { api } from '../api'

import { ListAllCitiesService } from '@/core/interfaces/city'
import { CitiesListResponse } from '@/core/types/city'

export class KyListAllCitiesService implements ListAllCitiesService {
  async list(): Promise<CitiesListResponse> {
    const response = await api('cities/list')

    return (await response.json()) as CitiesListResponse
  }
}
