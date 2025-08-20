import { CreateServiceRequestUseCase } from '@/application/useCases/serviceRequests/createServicesRequestUseCase'
import { KyCreateJobApplicationService } from '@/infra/services/ky/servicesRequest/kyCreateServiceRequestsService'

function createServicesRequestCaseFactory() {
  const service = new KyCreateJobApplicationService()

  return new CreateServiceRequestUseCase(service)
}

export const serviceRequestsUseCase = {
  create: createServicesRequestCaseFactory(),
}
