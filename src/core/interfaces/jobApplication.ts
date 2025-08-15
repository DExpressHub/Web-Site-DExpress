import { JobApplicationRequest, JobApplicationResponse } from '../types/jobApplication'

export interface CreateJobApplicationService {
  create(data: JobApplicationRequest): Promise<JobApplicationResponse>
}
