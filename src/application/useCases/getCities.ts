import { IGetCitiesService, GetCitiesResponse } from '@/core/interfaces/city'

export class GetCitiesUseCase {
  constructor(private readonly getCitiesService: IGetCitiesService) {}
  async execute(): Promise<UseCaseResponse<GetCitiesResponse>> {
    try {
      const cities = await this.getCitiesService.execute()

      return {
        data: cities,
        success: true,
      }
    } catch (error) {
      return {
        error: `Erro inesperado: ${error instanceof Error ? error.message : String(error)}`,
        success: false,
      }
    }
  }
}
