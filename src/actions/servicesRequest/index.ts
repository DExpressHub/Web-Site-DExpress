'use server'

import { createServiceRequestService } from '@/services/servicesRequest/createServiceRequestsService'
import { CreateServiceRequestParams } from '@/types/serviceRequest'

export async function serviceRequestAction(params: CreateServiceRequestParams) {
  return createServiceRequestService(params)
}
