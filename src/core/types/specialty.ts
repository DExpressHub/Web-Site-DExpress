export type Specialty = {
  id: string
  name: string
}

export type PaginatedSpecialtiesParams = {
  search?: string
  page?: number
  limit?: number
}

export type PaginatedSpecialtiesResponse = {
  data: Specialty[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export type SpecialtiesListResponse = Specialty[]
