import { Card, CardBody } from '@heroui/react'
import { Handshake, Search, UserPlus } from 'lucide-react'

export function HowItWorksSection({ id }: { id?: string }) {
  const steps = [
    {
      icon: UserPlus,
      title: '1. Cadastro',
      description: 'Crie seu perfil em poucos minutos, seja como empregador ou profissional.',
    },
    {
      icon: Search,
      title: '2. Busca',
      description: 'Encontre a melhor correspondência com filtros personalizados.',
    },
    {
      icon: Handshake,
      title: '3. Conexão',
      description: 'Converse diretamente e finalize a contratação com facilidade.',
    },
  ]

  return (
    <section className="py-20" id={id}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-4">Como Funciona?</h2>
          <p className="text-lg">
            Um processo simples para conectar empregadores e profissionais domésticas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <Card key={index} isHoverable>
              <CardBody className="flex flex-col items-center text-center px-6 py-8">
                <div className="w-14 h-14 flex bg-secondary/10 rounded-xl text-secondary items-center justify-center mx-auto mb-4 text-3xl">
                  <step.icon className="" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-800 mb-2">{step.title}</h3>
                <p className="text-foreground-600 text-sm md:text-base">{step.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
