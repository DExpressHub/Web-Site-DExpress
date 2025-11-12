import { ProfessionalHeader } from '../header'
import { ProfessionalSkills } from '../skills'
import { ProfessionalCourses } from '../courses'
import { ProfessionalLanguages } from '../languages'

import { ApplyCard } from '../applyCard'
import { Card, CardContent } from '@/components/ui/card'
import { listProfessionalByIdService } from '@/services/professionals/listProfessionalByIdService'
import { Profissional } from '@/types/professional'
import { ProfessionalSidebar } from '../sidebar'

interface ProfessionalDetailsProps {
  id: string
  isAuthenticated: boolean
}

export async function ProfessionalDetails({
  id,
  isAuthenticated,
}: ProfessionalDetailsProps) {
  let professional: Profissional | null = null
  const result = await listProfessionalByIdService(id)

  if (result.success) {
    professional = result.data
  }

  if (!professional) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="">Profissional não encontrado.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Card Principal */}
      <div className="lg:col-span-2 space-y-6">
        <Card className="h-full">
          <CardContent className="py-5 flex flex-col gap-4">
            <ProfessionalHeader professional={professional} />
            <ProfessionalSkills skills={professional.professionalSkills} />
            <ProfessionalCourses courses={professional.professionalCourses} />
            <ProfessionalLanguages
              languages={professional.professionalLanguages}
            />
          </CardContent>
        </Card>
      </div>

      {/* Sidebar */}
      <div className="space-y-6  flex-col-reverse">
        <ProfessionalSidebar professional={professional} />
        <ApplyCard
          isAuthenticated={isAuthenticated}
          professional={professional}
        />
      </div>
    </div>
  )
}
