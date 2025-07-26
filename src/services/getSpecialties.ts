import { env } from '@/config/env'
import { ServiceResponse, Specialty } from '@/types'

interface GetSpecialtiesOptions {
  revalidate?: number
}

export async function getSpecialtiesService(
  options: GetSpecialtiesOptions = {},
): Promise<ServiceResponse<Specialty[]>> {
  try {
    const fetchOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    if (options.revalidate !== undefined) {
      fetchOptions.next = { revalidate: options.revalidate }
    }

    const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/specialties`, fetchOptions)

    if (!response.ok) {
      const message = await response.text()

      return {
        error: `Erro ${response.status}: ${message}`,
        success: false,
      }
    }

    const data = (await response.json()) as Specialty[]

    return {
      data,
      success: true,
    }
  } catch (error) {
    return {
      error: `Erro inesperado: ${error instanceof Error ? error.message : String(error)}`,
      success: false,
    }
  }
}
