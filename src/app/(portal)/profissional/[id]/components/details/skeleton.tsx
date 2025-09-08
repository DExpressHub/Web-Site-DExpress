import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

function ProfessionalHeaderSkeleton() {
  return (
    <div className="flex items-start gap-6 mb-6">
      {/* Profile Image */}
      <div className="relative">
        <Skeleton className="w-24 h-24 rounded-full" />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gray-200 rounded-full" />
      </div>

      <div className="flex-1 space-y-4">
        {/* Name */}
        <Skeleton className="h-8 w-48" />

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-28" />
          </div>
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  )
}

function ProfessionalStatsSkeleton() {
  return (
    <div className="border-t border-border pt-6 mt-6">
      <Skeleton className="h-6 w-24 mb-4" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="text-center space-y-2">
            <Skeleton className="h-8 w-12 mx-auto" />
            <Skeleton className="h-4 w-20 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}

function CardWithItemsSkeleton() {
  return (
    <Card className="p-6">
      <Skeleton className="h-6 w-32 mb-4" />
      <div className="flex flex-wrap gap-2">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-6 w-24 rounded-full" />
        ))}
      </div>
    </Card>
  )
}

// Apply Button Skeleton
function ApplyButtonSkeleton({ className }: { className?: string }) {
  return <Skeleton className={`h-10 ${className}`} />
}

// Main Skeleton Component
export function ProfessionalDetailsSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content Column */}
      <div className="lg:col-span-2 space-y-6">
        <Card className="p-6">
          <ProfessionalHeaderSkeleton />
          <ProfessionalStatsSkeleton />
        </Card>
        <CardWithItemsSkeleton />
      </div>

      {/* Sidebar Column */}
      <div className="space-y-6">
        <ApplyButtonSkeleton className="lg:block hidden" />
        <CardWithItemsSkeleton />
        <CardWithItemsSkeleton />
        <ApplyButtonSkeleton className="lg:hidden" />
      </div>
    </div>
  )
}
