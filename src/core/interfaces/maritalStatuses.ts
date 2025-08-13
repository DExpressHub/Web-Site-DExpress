import { MaritalStatusesListResponse } from '../types/maritalStatuses'

export interface ListAllMaritalStatusesService {
  list(): Promise<MaritalStatusesListResponse>
}
