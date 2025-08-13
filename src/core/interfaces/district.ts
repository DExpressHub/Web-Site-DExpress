import { DistrictResponse } from '../types/district'

export interface ListAllDistrictsByCityIdService {
  list(cityId: string): Promise<DistrictResponse>
}
