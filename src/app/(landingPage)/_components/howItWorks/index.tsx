import { UserPlus, Search, MessageSquare } from 'lucide-react'

import { Card, CardContent } from '@/presentation/components/ui/card'

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: '1. Cadastro',
      description: 'Crie seu perfil em poucos minutos, seja como empregador ou profissional.',
      color: 'text-primary',
    },
    {
      icon: Search,
      title: '2. Busca',
      description: 'Encontre a melhor correspondência com filtros personalizados.',
      color: 'text-accent-foreground',
    },
    {
      icon: MessageSquare,
      title: '3. Conexão',
      description: 'Converse diretamente e finalize a contratação com facilidade.',
      color: 'text-success',
    },
  ]

  return (
    <section className="py-20 bg-muted/30" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Como Funciona?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Um processo simples para conectar empregadores e profissionais domésticas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <Card
                key={index}
                className="relative group hover:shadow-lg transition-all duration-300 border-0 shadow-soft"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute -right-12 top-8 w-8 h-0.5 bg-linear-to-r from-primary to-transparent" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
