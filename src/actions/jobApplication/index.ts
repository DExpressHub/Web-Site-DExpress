'use server'

import { createJobApplicationService } from '@/services/jobApplication/createJobApplicationService'
import { JobApplicationRequest } from '@/types/jobApplication'

export async function createJobApplicationAction(data: JobApplicationRequest) {
  return createJobApplicationService(data)
}
