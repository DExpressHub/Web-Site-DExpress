import { HighestDegreeListResponse } from '../types/highestDegree'

export interface ListAllHighestDegreeService {
  list(): Promise<HighestDegreeListResponse>
}
