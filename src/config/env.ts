/* eslint-disable no-console */
import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
})

const envVars = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
}

const _env = envSchema.safeParse(envVars)

if (!_env.success) {
  console.error('❌ Invalid public environment variables:', _env.error.flatten().fieldErrors)
  throw new Error('Invalid public environment variables.')
}

export const env = _env.data
