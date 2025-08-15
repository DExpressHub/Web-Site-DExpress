import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { handleApiError } from '@/application/utils/handleApiError'
import { JobApplicationRequest, JobApplicationResponse } from '@/core/types/jobApplication'
import { CreateJobApplicationService } from '@/core/interfaces/jobApplication'

export class CreateJobApplicationUseCase {
  constructor(private readonly service: CreateJobApplicationService) {}

  async execute(data: JobApplicationRequest): Promise<UseCaseResponse<JobApplicationResponse>> {
    try {
      const result = await this.service.create(data)

      return { success: true, data: result }
    } catch (err) {
      return { success: false, error: handleApiError(err) }
    }
  }
}
