export interface IGetProfessionalsService {
  execute(params?: GetProfessionalsParams): Promise<GetProfessionalsResponse>
}
export type GetProfessionalsResponse = {
  data: Profissional[]
  total: number
  page: number
  limit: number
  totalPages: number
  availability: string[]
}
export type GetProfessionalsParams = {
  name?: string
  cityId?: string
  districtId?: string
  availabilityType?: string
  experienceLevel?: string
  specialtyIds?: string
  page?: number
  limit?: number
}
