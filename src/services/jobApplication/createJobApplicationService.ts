import 'server-only'

import { handleApiError } from '@/utils/handleApiError'
import { JobApplicationRequest, JobApplicationResponse } from '@/types/jobApplication'
import { ServiceResponse } from '@/types/serviceResponse'
import { api } from '@/lib/api'

export async function createJobApplicationService(
  jobApplicationRequest: JobApplicationRequest,
): Promise<ServiceResponse<JobApplicationResponse>> {
  try {
    const response = await api.post('job-application', { json: jobApplicationRequest })
    const data = await response.json<JobApplicationResponse>()

    return {
      success: true,
      data,
    }
  } catch (error) {
    return {
      success: false,
      error: handleApiError(error),
    }
  }
}
