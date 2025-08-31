import { Suspense } from 'react'

import { HireProfessional } from './components/hireProfessional'
import { HireProfessionalSkeleton } from './components/hireProfessional/skelleton'
import { LoadHireData } from './components/load'

import { BackButton } from '@/components/backButton'

type ContratarPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function ContratarPage({ params }: ContratarPageProps) {
  const { id } = await params

  return (
    <LoadHireData>
      <main className="py-8">
        <div className="flex items-center gap-4 mb-8">
          <BackButton />
          <h1 className="text-2xl font-bold text-foreground">Contratar Profissional</h1>
        </div>
        {
          <Suspense fallback={<HireProfessionalSkeleton />}>
            <HireProfessional id={id} />
          </Suspense>
        }
      </main>
    </LoadHireData>
  )
}
