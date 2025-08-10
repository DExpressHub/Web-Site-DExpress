import { GeneralAvailabilityListResponse } from '@/core/types/generalAvailability'

export interface ListAllGeneralAvailabilitiesService {
  list(): Promise<GeneralAvailabilityListResponse>
}
