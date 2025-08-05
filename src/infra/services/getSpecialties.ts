import { env } from '@/config/env'
import { GetSpecialtiesResponse, IGetSpecialties } from '@/core/interfaces/specialty'
import { Specialty } from '@/core/types/specialty'

export class NextFetchGetSpecialtiesService implements IGetSpecialties {
  constructor(private readonly next?: NextFetchRequestConfig) {}
  async execute(): Promise<GetSpecialtiesResponse> {
    const init: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
      },
      next: this.next,
    }

    const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/specialties`, init)

    const data = (await response.json()) as Specialty[]

    return data
  }
}
