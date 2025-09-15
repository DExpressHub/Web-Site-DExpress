import { Suspense } from 'react'

import { ProfessionalDetails } from './components/details'
import { ProfessionalDetailsSkeleton } from './components/details/skeleton'

import { BackButton } from '@/components/backButton'
import { checkAuth } from '@/actions/checkAuth'

type Props = {
  params: Promise<{ id: string }>
}
export default async function ProfessionalPage({ params }: Props) {
  const { isAuthenticated } = await checkAuth()

  const { id } = await params

  return (
    <main className="py-8">
      <div className="flex items-center gap-4 mb-8">
        <BackButton />
        <h1 className="text-2xl font-bold text-foreground">Perfil do Profissional</h1>
      </div>
      <Suspense fallback={<ProfessionalDetailsSkeleton />}>
        <ProfessionalDetails id={id} isAuthenticated={isAuthenticated} />
      </Suspense>
    </main>
  )
}
