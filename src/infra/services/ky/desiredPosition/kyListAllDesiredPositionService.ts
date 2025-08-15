import { api } from '../api'

import { ListAllDesiredPositionService } from '@/core/interfaces/desiredPosition'
import { DesiredPositionListResponse } from '@/core/types/desiredPosition'

export class KyListAllDesiredPositionService implements ListAllDesiredPositionService {
  async list(): Promise<DesiredPositionListResponse> {
    const response = await api('desired-positions/list')

    return (await response.json()) as DesiredPositionListResponse
  }
}
