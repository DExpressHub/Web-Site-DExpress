import { CreateServiceRequestParams } from '../types/serviceRequest'

export interface CreateServiceRequestService {
  create(params: CreateServiceRequestParams): Promise<void>
}
