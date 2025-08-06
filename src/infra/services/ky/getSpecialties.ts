import { api } from './api'

import { GetSpecialtiesResponse, IGetSpecialties } from '@/core/interfaces/specialty'

export class KyGetSpecialtiesService implements IGetSpecialties {
  constructor() {}
  async execute(): Promise<GetSpecialtiesResponse> {
    const response = await api(`specialties`)
    const data = (await response.json()) as Specialty[]

    return data
  }
}
