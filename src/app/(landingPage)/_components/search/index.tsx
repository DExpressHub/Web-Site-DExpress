import { Search } from 'lucide-react'

import { SearchForm } from './SearchForm'

import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card'

export function SearchSection() {
  return (
    <section className="py-20 bg-background" id="search">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Encontre a Profissional Ideal
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Use filtros para localizar profissionais que atendam suas necessidades.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-elegant border-0">
          <CardHeader className="bg-linear-to-r from-primary/5 to-accent/5">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Search className="w-5 h-5 text-primary" />
              Buscar Profissionais
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <SearchForm />
          </CardContent>
        </Card>

        {/* Resultados fictícios */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Encontramos <span className="font-bold text-primary">247 profissionais</span> na sua
            região
          </p>
        </div>
      </div>
    </section>
  )
}
