export interface IGetCitiesService {
  execute(): Promise<GetCitiesResponse>
}
export type GetCitiesResponse = City[]
