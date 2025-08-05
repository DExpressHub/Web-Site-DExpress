import { Specialty } from '../types'

export interface IGetSpecialties {
  execute(): Promise<GetSpecialtiesResponse>
}
export type GetSpecialtiesResponse = Specialty[]
