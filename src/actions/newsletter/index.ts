'use server'

import { newsletterServices } from '@/services/newsletter/newsletter'

export async function newsletterAction(email: string) {
  return newsletterServices(email)
}
