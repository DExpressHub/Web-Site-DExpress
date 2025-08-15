import { api } from '../api'

import { ListAllGenderService } from '@/core/interfaces/gender'
import { GenderListResponse } from '@/core/types/gender'

export class KyListAllGenderService implements ListAllGenderService {
  async list(): Promise<GenderListResponse> {
    const response = await api('genders/list')

    return (await response.json()) as GenderListResponse
  }
}
