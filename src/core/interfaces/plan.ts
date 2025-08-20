import { PlansListResponse } from '../types/plan'

export interface ListAllPlansService {
  list(): Promise<PlansListResponse>
}
