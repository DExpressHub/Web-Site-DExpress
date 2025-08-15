import { api } from '@/infra/services/ky/api'
import { CreateJobApplicationService } from '@/core/interfaces/jobApplication'
import { JobApplicationRequest, JobApplicationResponse } from '@/core/types/jobApplication'

export class KyCreateJobApplicationService implements CreateJobApplicationService {
  async create(data: JobApplicationRequest): Promise<JobApplicationResponse> {
    const response = await api.post('job-application', { json: data })

    return await response.json<JobApplicationResponse>()
  }
}
