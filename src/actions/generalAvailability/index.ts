'use server'
import { listAllGeneralAvailabilitiesService } from '@/services/generalAvailability/listAllGeneralAvailabilitiesService'

export async function ListAllGeneralAvailabilitiesAction() {
  return listAllGeneralAvailabilitiesService()
}
