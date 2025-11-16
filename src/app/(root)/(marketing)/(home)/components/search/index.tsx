import { Search } from 'lucide-react'

import { SearchProvider } from './searchProvider'
import { SearchForm } from './searchForm'
import { ProfessionalsList } from './professionalsList'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { links } from '@/config/links'

export function SearchSection() {
  return (
    <SearchProvider>
      <section className="py-20 bg-background" id={links.buscar}>
        <div className="max-w-[120rem] w-full mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Encontre o Profissional Ideal
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Use filtros para localizar profissionais que atendam suas necessidades.
            </p>
          </div>
          <Card className="max-w-5xl mx-auto shadow-elegant border-0 overflow-hidden pb-5">
            <CardHeader className="bg-linear-to-r from-primary/5 to-accent/5">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Search className="w-5 h-5 text-primary" />
                Pesquisar um professional
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <SearchForm />
            </CardContent>
            <ProfessionalsList />
          </Card>
        </div>
      </section>
    </SearchProvider>
  )
}
