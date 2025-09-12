import { Star, Quote } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { links } from '@/config/links'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Empregadora',
      image: '',
      content:
        'Encontrei uma profissional incrível através da D-Express. O processo foi simples e seguro. Nossa casa nunca esteve tão bem cuidada!',
      rating: 5,
    },
    {
      name: 'Ana Santos',
      role: 'Profissional Doméstica',
      image: '',
      content:
        'A plataforma me ajudou a encontrar várias oportunidades de trabalho. Os empregadores são sérios e o pagamento é sempre em dia.',
      rating: 5,
    },
    {
      name: 'João Oliveira',
      role: 'Empregador',
      image: '',
      content:
        'Precisava de alguém para cuidar da casa enquanto viajo a trabalho. A profissional que encontrei é de total confiança.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-muted/30" id={links.depoimentos}>
      <div className="max-w-[120rem] w-full mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Depoimentos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos usuários têm a dizer sobre a experiência na D-Express.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-lg transition-all duration-300 border-0 shadow-soft"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  &rdquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2.500+</div>
            <div className="text-sm text-muted-foreground">Profissionais</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5.000+</div>
            <div className="text-sm text-muted-foreground">Conexões</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Suporte</div>
          </div>
        </div>
      </div>
    </section>
  )
}
