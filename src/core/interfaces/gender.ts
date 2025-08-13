import { GenderListResponse } from '../types/gender'

export interface ListAllGenderService {
  list(): Promise<GenderListResponse>
}
