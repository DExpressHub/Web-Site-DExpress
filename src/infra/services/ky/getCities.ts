import { api } from './api'

import { GetCitiesResponse, IGetCitiesService } from '@/core/interfaces/city'

export class KyGetCitiesService implements IGetCitiesService {
  constructor() {}
  async execute(): Promise<GetCitiesResponse> {
    const response = await api(`cities`)
    const data = (await response.json()) as City[]

    return data
  }
}
