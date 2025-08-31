import { SlidersHorizontal } from 'lucide-react'

import { ProfessionalsFilters } from './components/filters'
import { ProfessionalsList } from './components/professionalsList'
import { FiltersProvider } from './components/providers'

import { Button } from '@/components/ui/button'

export default function Professionals() {
  return (
    <div className="py-6">
      <div className="flex relative lg:flex-row flex-col gap-6">
        <Button className="lg:hidden sticky z-20 top-20" size="icon" variant="default">
          <SlidersHorizontal className="h-5 w-5" />
        </Button>
        <FiltersProvider>
          <ProfessionalsFilters className="hidden lg:block sticky top-24 max-w-2xs w-full" />
          <main className="flex-1">
            <ProfessionalsList />
          </main>
        </FiltersProvider>
      </div>
    </div>
  )
}
