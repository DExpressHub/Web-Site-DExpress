import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { handleApiError } from '@/application/utils/handleApiError'
import { CreateServiceRequestParams } from '@/core/types/serviceRequest'
import { CreateServiceRequestService } from '@/core/interfaces/serviceRequest'

export class CreateServiceRequestUseCase {
  constructor(private readonly service: CreateServiceRequestService) {}

  async execute(data: CreateServiceRequestParams): Promise<UseCaseResponse<void>> {
    try {
      const result = await this.service.create(data)

      return { success: true, data: result }
    } catch (err) {
      return { success: false, error: handleApiError(err) }
    }
  }
}
