import { api } from '../api'

import { ListAllPlansService } from '@/core/interfaces/plan'
import { PlansListResponse } from '@/core/types/plan'

export class KyListAllPlansService implements ListAllPlansService {
  async list(): Promise<PlansListResponse> {
    const response = await api('packages/list')

    return (await response.json()) as PlansListResponse
  }
}
