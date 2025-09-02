import 'server-only'
import { cache } from 'react'
import { cookies } from 'next/headers'

import { D_EXPRESS } from '@/constants'
import { getCurrentUserService } from '@/services/users/getCurrentUserService'

type VerifyUserResult =
  | { success: true; data: Awaited<ReturnType<typeof getCurrentUserService>>['data'] }
  | { success: false; message: string }

export const verifyUser = cache(async (): Promise<VerifyUserResult> => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get(D_EXPRESS.accessToken)
  const refreshToken = cookieStore.get(D_EXPRESS.refreshToken)

  if (!accessToken && !refreshToken) {
    return { success: false, message: 'Unauthorized' }
  }

  const result = await getCurrentUserService()

  if (!result.success) {
    return { success: false, message: result.error.message }
  }

  return { success: true, data: result.data }
})
