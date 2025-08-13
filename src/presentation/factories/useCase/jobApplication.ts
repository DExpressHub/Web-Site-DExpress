import { CreateJobApplicationUseCase } from '@/application/useCases/jobApplication/createJobApplicationUseCase'
import { KyCreateJobApplicationService } from '@/infra/services/ky/jobApplication/kyCreateJobApplicationService'

function createJobApplicationCaseFactory() {
  const service = new KyCreateJobApplicationService()

  return new CreateJobApplicationUseCase(service)
}

export const jobApplicationUseCase = {
  create: createJobApplicationCaseFactory(),
}
