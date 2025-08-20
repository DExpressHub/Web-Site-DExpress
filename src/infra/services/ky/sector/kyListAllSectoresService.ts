import { api } from '../api'

import { ListAllSectorService } from '@/core/interfaces/sector'
import { SectorResponse } from '@/core/types/sector'

export class KyListAllSectorService implements ListAllSectorService {
  async list(): Promise<SectorResponse> {
    const response = await api('sectors/list')

    return (await response.json()) as SectorResponse
  }
}
