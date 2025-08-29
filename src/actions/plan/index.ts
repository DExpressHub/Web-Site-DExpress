'use server'

import { listAllPlansService } from '@/services/plan/listAllPlansService'

export async function listAllPlansAction() {
  return listAllPlansService()
}
