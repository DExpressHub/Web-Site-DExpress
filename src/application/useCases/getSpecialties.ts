import { IGetCitiesService } from '@/core/interfaces/city'
import { GetSpecialtiesResponse } from '@/core/interfaces/specialty'

export class GetSpecialtiesUseCase {
  constructor(private readonly getSpeciaLtiesService: IGetCitiesService) {}
  async execute(): Promise<UseCaseResponse<GetSpecialtiesResponse>> {
    try {
      const specialties = await this.getSpeciaLtiesService.execute()

      return {
        data: specialties,
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
