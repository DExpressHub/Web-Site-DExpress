// src/application/useCases/generalAvailability/listAllGeneralAvailabilitiesUseCase.ts

import { handleApiError } from '@/application/utils/handleApiError'
import { ListAllGeneralAvailabilitiesService } from '@/core/interfaces/generalAvailability'
import { GeneralAvailabilityListResponse } from '@/core/types/generalAvailability'
import { UseCaseResponse } from '@/core/types/useCaseResponse'

export class ListAllGeneralAvailabilitiesUseCase {
  constructor(private readonly listAllService: ListAllGeneralAvailabilitiesService) {}

  async execute(): Promise<UseCaseResponse<GeneralAvailabilityListResponse>> {
    try {
      const data = await this.listAllService.list()

      return { success: true, data }
    } catch (err) {
      return { success: false, error: handleApiError(err) }
    }
  }
}
