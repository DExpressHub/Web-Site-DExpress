import { FiltersProfessional, PaginatedProfissionalResponse } from '../types/professional'

export interface ListPaginatedProfessionalService {
  list(filters?: FiltersProfessional): Promise<PaginatedProfissionalResponse>
}
