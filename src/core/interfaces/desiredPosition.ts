import {
  DesiredPositionListResponse,
  PaginatedDesiredPositionResponse,
  DesiredPositionFilters,
} from '../types/desiredPosition'

export interface ListAllDesiredPositionService {
  list(): Promise<DesiredPositionListResponse>
}

export interface ListPaginatedDesiredPositionsService {
  list(filters?: DesiredPositionFilters): Promise<PaginatedDesiredPositionResponse>
}
