import { api } from '../api'

import { ListAllSpecialtiesService } from '@/core/interfaces/specialty'
import { SpecialtiesListResponse } from '@/core/types/specialty'

export class KyListAllSpecialtiesService implements ListAllSpecialtiesService {
  async list(): Promise<SpecialtiesListResponse> {
    const response = await api('specialties/list')

    return (await response.json()) as SpecialtiesListResponse
  }
}
