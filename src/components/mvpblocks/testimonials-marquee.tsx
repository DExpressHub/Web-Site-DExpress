import { Star, Quote } from 'lucide-react'

import { Marquee } from '../ui/marquee'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
type Testimonial = {
  name: string
  role: string
  image: string
  content: string
  rating: number
}
const testimonials: Testimonial[] = [
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

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="relative group hover:shadow-lg transition-all duration-300 border-0 shadow-soft">
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
  )
}

const firstRow = testimonials.slice(0, testimonials.length / 2)
const secondRow = testimonials.slice(testimonials.length / 2)
const thirdRow = testimonials.slice(0, testimonials.length / 2)

export function MarqueeDemoVertical() {
  return (
    <div className="relative max-w-6xl mx-auto flex max-h-[600px] w-full flex-col md:flex-row items-center justify-center overflow-hidden gap-4">
      {/* Mobile: apenas uma coluna (mostrando todos os cards) */}
      <div className="flex md:hidden w-full">
        <Marquee pauseOnHover vertical className="[--duration:20s] w-full">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>

      {/* Tablet+ : múltiplas colunas */}
      <div className="hidden md:flex flex-1">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
      <div className="hidden md:flex flex-1">
        <Marquee pauseOnHover reverse vertical className="[--duration:20s]">
          {secondRow.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
      <div className="hidden lg:flex flex-1">
        <Marquee pauseOnHover reverse vertical className="[--duration:20s]">
          {thirdRow.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
    </div>
  )
}
