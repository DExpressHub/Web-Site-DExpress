import {
  GetProfessionalsParams,
  GetProfessionalsResponse,
  IGetProfessionalsService,
} from '@/core/interfaces/professionals'

export class GetProfessionalsUseCase {
  constructor(private readonly service: IGetProfessionalsService) {}

  async execute(
    params?: GetProfessionalsParams,
  ): Promise<UseCaseResponse<GetProfessionalsResponse>> {
    console.log('params', params)
    try {
      const result = await this.service.execute(params)

      console.log(params)

      return {
        data: result,
        success: true,
      }
    } catch (error) {
      console.log(error)

      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      }
    }
  }
}
