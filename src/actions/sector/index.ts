'use server'

import { listAllSectorsService } from '@/services/sector/listAllSectoresService'

export async function listAllSectorsAction() {
  return listAllSectorsService()
}
