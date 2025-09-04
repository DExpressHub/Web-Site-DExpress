import { Suspense } from 'react'

import { ServiceRequestsSkeleton } from './serviceRequestsSkeletonCard'
import { ServiceRequest } from './serviceRequest'

import { BackButton } from '@/components/backButton'

export default async function SolicitationPage() {
  return (
    <main className="py-8">
      <div className="flex items-center gap-4 mb-8">
        <BackButton />
        <h1 className="text-2xl font-bold text-foreground">Minhas Solicitações</h1>
      </div>
      <Suspense fallback={<ServiceRequestsSkeleton />}>
        <ServiceRequest />
      </Suspense>
    </main>
  )
}
