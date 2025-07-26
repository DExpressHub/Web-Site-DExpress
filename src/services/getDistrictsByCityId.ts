// @/services/location.ts (ou onde preferir)
import { env } from '@/config/env'
import { District, ServiceResponse } from '@/types'

interface getDistrictsByCityIdOptions {
  revalidate?: number
  cityId: string
}

export async function getDistrictsByCityIdService(
  options: getDistrictsByCityIdOptions,
): Promise<ServiceResponse<District[]>> {
  const { cityId, revalidate } = options

  try {
    const fetchOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    if (options.revalidate !== undefined) {
      fetchOptions.next = { revalidate }
    }

    const response = await fetch(
      `${env.NEXT_PUBLIC_API_URL}/districts?cityId=${cityId}`,
      fetchOptions,
    )

    if (!response.ok) {
      const message = await response.text()

      return {
        error: `Erro ${response.status}: ${message}`,
        success: false,
      }
    }

    const data = (await response.json()) as District[]

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
