import { SidebarResumo } from './sidebarResumo'
import { HireForm } from './form'
import { HireFormClientProvider } from './form/provider'

import { listProfessionalByIdService } from '@/services/professionals/listProfessionalByIdService'
import { ProfessionalDetails } from '@/types/professional'
import { GetCurrentUserResponse } from '@/types/users'

export async function HireProfessional({ id, user }: { id: string; user: GetCurrentUserResponse }) {
  let professional: ProfessionalDetails | null = null

  const result = await listProfessionalByIdService(id)

  if (result.success) {
    professional = result.data
  }

  if (!professional) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Profissional não encontrado.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <HireFormClientProvider user={user}>
        <HireForm professional={professional} />
        <SidebarResumo professional={professional} />
      </HireFormClientProvider>
    </div>
  )
}
