import {
  UserPlus,
  Search,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { links } from '@/config/links'

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Cadastro',
      number: '01',
      description:
        'Crie seu perfil em poucos minutos, seja como empregador ou profissional.',
      gradient: 'from-violet-500 to-purple-600',
      bgGradient: 'from-violet-500/10 via-purple-500/5 to-transparent',
      shadowColor: 'hover:shadow-violet-500/20',
    },
    {
      icon: Search,
      title: 'Busca',
      number: '02',
      description:
        'Encontre a melhor correspondência com filtros personalizados.',
      gradient: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-500/10 via-cyan-500/5 to-transparent',
      shadowColor: 'hover:shadow-blue-500/20',
    },
    {
      icon: MessageSquare,
      title: 'Conexão',
      number: '03',
      description:
        'Converse diretamente e finalize a contratação com facilidade.',
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      shadowColor: 'hover:shadow-emerald-500/20',
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden" id={links.comoFunciona}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-[120rem] w-full mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Processo Simples
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Como Funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conecte-se em apenas 3 passos simples
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div key={index} className="relative group">
                {/* Connecting Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-24 z-10 items-center justify-center w-8 h-8">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                )}

                <Card
                  className={`relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm ${step.shadowColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Animated Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{ padding: '2px' }}
                  >
                    <div className="absolute inset-[2px] bg-card rounded-lg" />
                  </div>

                  <CardContent className="relative p-8 text-center">
                    {/* Number Badge */}
                    <div className="absolute top-4 right-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br opacity-70 ${step.gradient}  flex items-center justify-center`}
                      >
                        <span className="text-lg font-bold text-white">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="relative mb-6 mt-4">
                      <div
                        className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500`}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-foreground group-hover:to-foreground/70 transition-all duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {step.description}
                    </p>

                    {/* Hover Indicator */}
                    <div className="mt-6 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div
                        className={`h-1 w-12 rounded-full bg-gradient-to-r ${step.gradient}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/*<div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Pronto para começar?</p>
          <Link
            href={links.login}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary text-white font-semibold hover:shadow-xl hover:shadow-violet-500/30 hover:scale-105 transition-all duration-300"
          >
            Criar Conta
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>*/}
      </div>
    </section>
  )
}
