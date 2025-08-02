'use client'
import { Search, Briefcase, Users, CheckCircle } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className="flex items-center justify-center relative overflow-hidden bg-linear-to-br from-primary/10 via-background to-accent/5"
      id="home"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">Conexões</span> que transformam{' '}
                <span className="text-foreground">lares e carreiras</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Conectamos empregadores a profissionais domésticas qualificadas, com segurança e
                eficiência.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="text-lg px-8 py-6"
                size="lg"
                onClick={() => scrollToSection('#search')}
              >
                <Search className="w-5 h-5 mr-2" />
                Contratar
              </Button>
              <Button
                className="text-lg px-8 py-6"
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#apply')}
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Trabalhe Conosco
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex -space-x-3">
                <Avatar className="border-2 border-background w-12 h-12">
                  <AvatarImage src="/api/placeholder/48/48" />
                  <AvatarFallback>M1</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background w-12 h-12">
                  <AvatarImage src="/api/placeholder/48/48" />
                  <AvatarFallback>M2</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background w-12 h-12">
                  <AvatarImage src="/api/placeholder/48/48" />
                  <AvatarFallback>M3</AvatarFallback>
                </Avatar>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground border-2 border-background flex items-center justify-center font-bold">
                  +K
                </div>
              </div>
              <div>
                <div className="font-bold text-lg">+2.500 profissionais</div>
                <div className="text-sm text-muted-foreground">cadastradas na plataforma</div>
              </div>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center space-x-2 text-success">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Referências verificadas</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                fill
                priority
                alt="Profissional doméstica qualificada"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                src="/hero-image.jpg"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-xs rounded-xl p-6 shadow-lg border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-success" />
                </div>
                <div>
                  <div className="font-bold text-2xl">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
