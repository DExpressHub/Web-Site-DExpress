import { api } from '../api'

import { ListAllGeneralAvailabilitiesService } from '@/core/interfaces/generalAvailability'
import { GeneralAvailabilityListResponse } from '@/core/types/generalAvailability'

export class KyListAllGeneralAvailabilitiesService implements ListAllGeneralAvailabilitiesService {
  async list(): Promise<GeneralAvailabilityListResponse> {
    const response = await api('general-availabilities/list')

    return (await response.json()) as GeneralAvailabilityListResponse
  }
}
