import { api } from '../api'

import { ListAllHighestDegreeService } from '@/core/interfaces/highestDegree'
import { HighestDegreeListResponse } from '@/core/types/highestDegree'

export class KyListAllHighestDegreeService implements ListAllHighestDegreeService {
  async list(): Promise<HighestDegreeListResponse> {
    const response = await api('highest-degrees/list')

    return (await response.json()) as HighestDegreeListResponse
  }
}
