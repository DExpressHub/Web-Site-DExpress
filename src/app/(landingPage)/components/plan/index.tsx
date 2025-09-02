'use client'
import { Check } from 'lucide-react'

import { useBecomeClient } from '../becomeClients/becomeClientContext'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/utils/cn'
import { links } from '@/config/links'

export function PlanSection() {
  const { handleSetPlan, plans } = useBecomeClient()

  return (
    <section className="py-20 bg-linear-to-br from-primary/5 to-accent/5" id={links.planos}>
      <div className="max-w-[120rem] w-full mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planos para Contratar Profissionais
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para encontrar e contratar os melhores profissionais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-8 max-w-6xl w-full mx-auto">
          {plans.map((plan) => {
            const IconComponent = plan.icon

            return (
              <Card
                key={plan.name}
                className={`relative ${plan.isPopular ? ' shadow-elegant' : 'border-border'} transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary flex flex-col`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Mais Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className={`p-3 rounded-full ${plan.isPopular ? 'bg-primary/10' : 'bg-primary/10'}`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${plan.isPopular ? 'text-primary' : 'text-primary'}`}
                      />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-4 flex-1">
                  <ul className="space-y-3">
                    {plan.details.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className={cn('w-full cursor-pointer')}
                    onClick={() => handleSetPlan(plan.id)}
                  >
                    Escolher Plano
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
