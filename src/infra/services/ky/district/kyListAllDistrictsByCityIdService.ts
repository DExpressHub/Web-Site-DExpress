import { api } from '../api'

import { ListAllDistrictsByCityIdService } from '@/core/interfaces/district'
import { DistrictResponse } from '@/core/types/district'

export class KyListAllDistrictsByCityIdService implements ListAllDistrictsByCityIdService {
  async list(cityId: string): Promise<DistrictResponse> {
    const response = await api(`districts/${cityId}/city`)

    return (await response.json()) as DistrictResponse
  }
}
