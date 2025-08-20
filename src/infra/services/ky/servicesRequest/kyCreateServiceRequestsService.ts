import { api } from '@/infra/services/ky/api'
import { CreateServiceRequestParams } from '@/core/types/serviceRequest'
import { CreateServiceRequestService } from '@/core/interfaces/serviceRequest'

export class KyCreateJobApplicationService implements CreateServiceRequestService {
  async create(data: CreateServiceRequestParams): Promise<void> {
    const response = await api.post('service-requests', { json: data })

    return await response.json<void>()
  }
}
