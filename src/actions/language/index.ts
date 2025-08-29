'use server'

import { listAllLanguagesService } from '@/services/language/listAllLanguagesService'

export async function listAllLanguagesAction() {
  return listAllLanguagesService()
}
