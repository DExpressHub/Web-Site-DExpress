'use client'
import { UserPlus, Sparkles } from 'lucide-react'

import { ApplyFormProvider } from './applyFormProvider'
import { ApplyForm } from './applyForm'

import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card'

export function ApplySection() {
  const specialtyOptions = [
    { id: 'limpeza', label: 'Limpeza' },
    { id: 'culinaria', label: 'Culinária' },
    { id: 'cuidados-especiais', label: 'Cuidados Especiais' },
    { id: 'baba', label: 'Babá' },
    { id: 'passadoria', label: 'Passadoria' },
    { id: 'jardinagem', label: 'Jardinagem' },
  ]

  return (
    <section
      className="py-20 relative bg-cover bg-center bg-no-repeat"
      id="apply"
      style={{
        backgroundImage: `url('/fn2.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/80 to-accent/70" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Seja uma profissional com visibilidade
            </h2>
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Destaque suas habilidades e encontre novas oportunidades de trabalho.
          </p>
        </div>
        <Card className="max-w-2xl mx-auto shadow-elegant border-0">
          <CardHeader className="bg-linear-to-r from-primary/5 to-accent/5">
            <CardTitle className="flex items-center gap-2 text-xl">
              <UserPlus className="w-5 h-5 text-primary" />
              Cadastro de Profissional
            </CardTitle>
          </CardHeader>
          <ApplyFormProvider>
            <CardContent className="p-8">
              <ApplyForm />
            </CardContent>
          </ApplyFormProvider>
        </Card>
      </div>
    </section>
  )
}
