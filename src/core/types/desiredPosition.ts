export type DesiredPosition = {
  id: string
  name: string
  description: string | null
  label: string
}

export type DesiredPositionFilters = {
  search?: string
  page?: number
  limit?: number
}

export type PaginatedDesiredPositionResponse = {
  data: DesiredPosition[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export type DesiredPositionListResponse = DesiredPosition[]
