'use server'

import { listAllSkillsService } from '@/services/skill/listAllSkillsService'

export async function listAllSkillsAction() {
  return listAllSkillsService()
}
