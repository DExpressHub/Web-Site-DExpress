export type City = {
  id: string
  name: string
}

export type PaginatedCitiesParams = {
  search?: string
  page?: number
  limit?: number
}

export type PaginatedCitiesResponse = {
  data: City[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export type CitiesListResponse = City[]
