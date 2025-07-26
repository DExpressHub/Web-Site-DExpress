import { Button, Card } from '@heroui/react'
import { Check } from 'lucide-react'

import { cn } from '@/utils'

export function PricingSection({ id }: { id?: string }) {
  const plans = [
    {
      name: 'Básico',
      price: 'Grátis',
      period: '',
      description: 'Para começar a usar a plataforma',
      features: ['Cadastro de perfil', 'Busca básica', '3 contatos por mês', 'Suporte por email'],
      buttonText: 'Começar Grátis',
      color: 'primary' as const,
      popular: false,
    },
    {
      name: 'Profissional',
      price: '2.500',
      period: '/mês',
      description: 'Para profissionais que querem destaque',
      features: [
        'Tudo do plano Básico',
        'Perfil destacado',
        'Contatos ilimitados',
        'Verificação premium',
        'Suporte prioritário',
        'Estatísticas detalhadas',
      ],
      buttonText: 'Escolher Profissional',
      color: 'secondary' as const,
      popular: true,
    },
    {
      name: 'Empresarial',
      price: '5.000',
      period: '/mês',
      description: 'Para empregadores que contratam frequentemente',
      features: [
        'Tudo do plano Profissional',
        'Gerente de conta dedicado',
        'Integração WhatsApp Business',
        'Relatórios avançados',
        'Múltiplos usuários',
        'API personalizada',
      ],
      buttonText: 'Contatar Vendas',
      color: 'primary' as const,
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-content2" id={id}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos para Todos</h2>
          <p className="text-lg  max-w-2xl mx-auto">
            Escolha o plano ideal para suas necessidades. Conecte-se com mais oportunidades e faça
            sua carreira crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${plan.popular ? 'pricing-card-popular' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span
                      className={cn(
                        'text-3xl font-bold text-primary',
                        plan.color === 'primary' ? 'text-primary' : 'text-secondary',
                      )}
                    >
                      {plan.price === 'Grátis' ? plan.price : `${plan.price} Kz`}
                    </span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div
                        className={cn(
                          'bg-primary rounded-full w-6 h-6 flex justify-center items-center',
                          plan.color === 'primary' ? 'bg-primary' : 'bg-secondary',
                        )}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button fullWidth color={plan.color} size="lg" variant="ghost">
                  {plan.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Todos os planos incluem segurança de dados e atendimento em português
          </p>
        </div>
      </div>
    </section>
  )
}
