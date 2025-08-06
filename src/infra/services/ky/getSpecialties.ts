import { api } from './api'

import { GetSpecialtiesResponse, IGetSpecialtiesService } from '@/core/interfaces/specialty'

export class KyGetSpecialtiesService implements IGetSpecialtiesService {
  constructor() {}
  async execute(): Promise<GetSpecialtiesResponse> {
    const response = await api(`specialties`)
    const data = (await response.json()) as Specialty[]

    return data
  }
}
