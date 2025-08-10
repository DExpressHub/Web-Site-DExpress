import { CitiesListResponse, PaginatedCitiesParams, PaginatedCitiesResponse } from '../types/city'

export interface ListAllCitiesService {
  list(): Promise<CitiesListResponse>
}

export interface ListPaginatedCitiesService {
  list(params?: PaginatedCitiesParams): Promise<PaginatedCitiesResponse>
}
