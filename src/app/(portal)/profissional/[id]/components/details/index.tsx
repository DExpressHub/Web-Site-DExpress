import { Suspense } from 'react'

import { ProfessionalHeader } from '../header'
import { ProfessionalStats } from '../stats'
import { ProfessionalLanguages } from '../languages'
import { ProfessionalCourses } from '../courses'
import { ProfessionalSkills } from '../skills'
import { ApplyCard } from '../applyCard'

import { Card } from '@/components/ui/card'
import { listProfessionalByIdService } from '@/services/professionals/listProfessionalByIdService'
import { ProfessionalDetails as ProfessionalDetailsType } from '@/types/professional'

interface ProfessionalDetailsProps {
  id: string
}
export async function ProfessionalDetails({ id }: ProfessionalDetailsProps) {
  let professional: ProfessionalDetailsType | null = null

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
      <div className="lg:col-span-2 space-y-6">
        <Card className="p-6">
          <ProfessionalHeader professional={professional} />
          <ProfessionalStats professional={professional} />
        </Card>
        <ProfessionalSkills skills={professional.professionalSkills} />
      </div>

      <div className="space-y-6">
        <Suspense>
          <ApplyCard className="hidden lg:block" professional={professional} />
        </Suspense>
        <ProfessionalCourses courses={professional.professionalCourses} />
        <ProfessionalLanguages languages={professional.professionalLanguages} />
        <Suspense>
          <ApplyCard className="lg:hidden" professional={professional} />
        </Suspense>
      </div>
    </div>
  )
}
