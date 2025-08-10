import {
  PaginatedSpecialtiesParams,
  PaginatedSpecialtiesResponse,
  SpecialtiesListResponse,
} from '../types/specialty'

export interface ListAllSpecialtiesService {
  list(): Promise<SpecialtiesListResponse>
}

export interface ListPaginatedSpecialtiesService {
  list(params?: PaginatedSpecialtiesParams): Promise<PaginatedSpecialtiesResponse>
}
