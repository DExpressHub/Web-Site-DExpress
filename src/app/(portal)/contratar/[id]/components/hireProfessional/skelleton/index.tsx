import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const HireProfessionalSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="p-6">
          <Skeleton className="h-4 w-24 mb-2" />
          <div className="space-y-6 mt-5">
            <div className="">
              <div className="mb-4">
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
            <div className="">
              <div className="mb-4">
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-30 w-full" />
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Skeleton className="h-10 w-20" />
              <Skeleton className="h-10 w-20" />
            </div>
          </div>
        </Card>
      </div>

      <div>
        <Card className="p-6">
          <Skeleton className="h-5 w-40 mb-4" />

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div className="flex-1">
                <Skeleton className="h-4 w-24 mb-1" />
                <div className="flex items-center gap-1">
                  <Skeleton className="h-3 w-3" />
                  <Skeleton className="h-3 w-8" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Skeleton className="h-3 w-3" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <Skeleton className="h-3 w-28 mb-2" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>

            <div>
              <Skeleton className="h-3 w-16 mb-2" />
              <div className="space-y-1">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-3/4" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
