export interface IGetSpecialtiesService {
  execute(): Promise<GetSpecialtiesResponse>
}
export type GetSpecialtiesResponse = Specialty[]
