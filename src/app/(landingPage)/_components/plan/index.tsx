import { Check, Crown, Sparkles, Star } from 'lucide-react'

import { Button } from '@/presentation/components/ui/button'
import { Badge } from '@/presentation/components/ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/presentation/components/ui/card'
import { cn } from '@/presentation/utils'

const plans = [
  {
    name: 'Individual',
    price: '426 000 KZ',
    period: '/mês',
    description: 'Ideal para escritórios pequenos, lojas ou residências empresariais',
    features: [
      'Equipa de até 5 profissionais',
      'Uniformes incluídos',
      'Supervisão periódica',
      'Gestão administrativa completa dos funcionários',
    ],
    popular: false,
    icon: Star,
  },
  {
    name: 'Profissional',
    price: '1 011 750 KZ',
    period: '/mês',
    description: 'Ideal para médias empresas, clínicas, showrooms ou escritórios de médio porte',
    features: [
      'Equipa de até 10 profissionais',
      'Uniformes incluídos',
      'Supervisão semanal',
      'Equipamento básico de limpeza',
      'Substituição em caso de falta',
      'Gestão administrativa completa dos funcionários',
      'Plano de fidelização com descontos progressivos',
    ],
    popular: true,
    icon: Crown,
  },
  {
    name: 'Premium',
    price: '1 917 000 KZ',
    period: '/mês',
    description:
      'Ideal para grandes empresas, edifícios corporativos, hotéis, escolas e clínicas maiores',
    features: [
      'Equipa de até 15 profissionais',
      'Uniformes incluídos',
      'Supervisão dedicada',
      'Gestão administrativa completa dos funcionários',
      'Relatório detalhado mensal',
      'Substituição imediata',
      'Equipamento de limpeza',
      'Produtos de limpeza incluídos',
      'Plano de fidelização com descontos progressivos',
    ],
    popular: false,
    icon: Sparkles,
  },
]

export function PlanSection() {
  return (
    <section className="py-20 bg-linear-to-br from-primary/5 to-accent/5" id="plans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planos para Contratar Profissionais
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para encontrar e contratar os melhores profissionais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const IconComponent = plan.icon

            return (
              <Card
                key={plan.name}
                className={`relative ${plan.popular ? 'border-primary shadow-elegant scale-105' : 'border-border'} transition-all duration-300 hover:shadow-lg`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Mais Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className={`p-3 rounded-full ${plan.popular ? 'bg-primary/10' : 'bg-primary/10'}`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${plan.popular ? 'text-primary' : 'text-primary'}`}
                      />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button className={cn('w-full cursor-pointer')}>Escolher Plano</Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
