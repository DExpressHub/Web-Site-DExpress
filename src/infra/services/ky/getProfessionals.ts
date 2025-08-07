import { api } from './api'

import {
  GetProfessionalsParams,
  IGetProfessionalsService,
  GetProfessionalsResponse,
} from '@/core/interfaces/professionals'

export class KyGetProfessionalsService implements IGetProfessionalsService {
  async execute(params: GetProfessionalsParams): Promise<GetProfessionalsResponse> {
    const searchParams = new URLSearchParams()

    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        searchParams.set(key, String(value))
      }
    }
    const response = await api(`professionals?${searchParams}`)
    const data = (await response.json()) as GetProfessionalsResponse

    return data
  }
}
