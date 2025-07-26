import { Button } from '@heroui/react'
import { useState } from 'react'

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      text: 'Encontrei uma profissional excepcional para minha casa. O processo foi simples e confiável.',
      name: 'Ana Costa',
      location: 'Benfica, Luanda',
      avatar: '/placeholder.svg',
    },
    {
      id: 2,
      text: 'Consegui um emprego como babá com uma família incrível. A plataforma é muito prática!',
      name: 'Mariana Silva',
      location: 'Golf II, Luanda',
      avatar: '/placeholder.svg',
    },
    {
      id: 3,
      text: 'A verificação de referências me deu confiança para contratar a profissional certa.',
      name: 'Lucas Mendes',
      location: 'Zango, Luanda',
      avatar: '/placeholder.svg',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-gray-50 py-16" id="testimonials">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 playfair text-primary">Depoimentos</h2>
          <p className="text-base text-gray-600">
            Conheça as experiências de quem usa a D-Express.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                    <p className="text-base text-gray-600 mb-6 italic">{testimonial.text}</p>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                        <i className="fas fa-user text-gray-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base text-gray-800">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-primary">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button className="rounded-full" disabled={currentIndex === 0} onClick={prevSlide}>
              <i className="fas fa-chevron-left" />
            </Button>
            <Button
              className="rounded-full"
              disabled={currentIndex === testimonials.length - 1}
              onClick={nextSlide}
            >
              <i className="fas fa-chevron-right" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
