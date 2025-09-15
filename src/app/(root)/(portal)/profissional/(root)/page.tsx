import { ProfessionalsFilters } from './components/filters'
import { ProfessionalsList } from './components/professionalsList'
import { FiltersProvider } from './components/providers'
import { FiltersMobile } from './components/mobile'

export default function Professionals() {
  return (
    <FiltersProvider>
      <div className="py-6">
        <div className="flex relative lg:flex-row flex-col gap-6">
          <FiltersMobile className="lg:hidden sticky z-20 top-20" />

          <ProfessionalsFilters className="hidden lg:block sticky top-24 max-w-2xs w-full" />
          <main className="flex-1">
            <ProfessionalsList />
          </main>
        </div>
      </div>
    </FiltersProvider>
  )
}
