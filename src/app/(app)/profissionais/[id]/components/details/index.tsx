import { ProfessionalHeader } from '../header'
import { ProfessionalStats } from '../stats'
import { ProfessionalLanguages } from '../languages'
import { ProfessionalCourses } from '../courses'
import { ProfessionalSkills } from '../skills'
import { ProfessionalContacts } from '../contacts'
import { ApplyButton } from '../applyButton'

import { Card } from '@/components/ui/card'
import { listProfessionalByIdService } from '@/services/professionals/listProfessionalByIdService'
import { ProfessionalDetails as ProfessionalDetailsType } from '@/types/professional'
import { Skeleton } from '@/components/ui/skeleton'

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
          <div className="border-t border-border pt-6 mt-6 hidden lg:flex lg:justify-center">
            <ApplyButton className="w-1/2" professional={professional} />
          </div>
        </Card>
      </div>

      <div className="space-y-6">
        <ProfessionalContacts professional={professional} />
        <ProfessionalCourses courses={professional.professionalCourses} />
        <ProfessionalSkills skills={professional.professionalSkills} />
        <ProfessionalLanguages languages={professional.professionalLanguages} />
        <ApplyButton className="lg:hidden" professional={professional} />
      </div>
    </div>
  )
}

function ProfessionalDetailsSkelleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Skeleton className="lg:col-span-2" />
      <Skeleton className="col-span-1 lg:col-span-1" />
    </div>
  )
}
