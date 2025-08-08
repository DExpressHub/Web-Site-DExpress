'use client'
import { Star, UserPlus, Sparkles } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/presentation/components/ui/button'
import { Input } from '@/presentation/components/ui/input'
import { Textarea } from '@/presentation/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/presentation/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card'
import { Checkbox } from '@/presentation/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/presentation/components/ui/form'
import { ApplyFormProvider } from './applyFormProvider'

const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  birthDate: z.string().min(1, 'Data de nascimento é obrigatória'),
  address: z.string().min(5, 'Endereço deve ter pelo menos 5 caracteres'),
  experience: z.string().min(1, 'Selecione uma opção de experiência'),
  specialties: z.array(z.string()).min(1, 'Selecione pelo menos uma especialidade'),
  availability: z.string().min(1, 'Selecione uma opção de disponibilidade'),
  description: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function ApplySection() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      birthDate: '',
      address: '',
      experience: '',
      specialties: [],
      availability: '',
      description: '',
    },
  })

  const specialtyOptions = [
    { id: 'limpeza', label: 'Limpeza' },
    { id: 'culinaria', label: 'Culinária' },
    { id: 'cuidados-especiais', label: 'Cuidados Especiais' },
    { id: 'baba', label: 'Babá' },
    { id: 'passadoria', label: 'Passadoria' },
    { id: 'jardinagem', label: 'Jardinagem' },
  ]

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)

    form.reset()
  }

  return (
    <section
      className="py-20 relative bg-cover bg-center bg-no-repeat"
      id="apply"
      style={{
        backgroundImage: `url('/fn2.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/80 to-accent/70" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Seja uma profissional com visibilidade
            </h2>
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Destaque suas habilidades e encontre novas oportunidades de trabalho.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-elegant border-0">
          <CardHeader className="bg-linear-to-r from-primary/5 to-accent/5">
            <CardTitle className="flex items-center gap-2 text-xl">
              <UserPlus className="w-5 h-5 text-primary" />
              Cadastro de Profissional
            </CardTitle>
          </CardHeader>
          <ApplyFormProvider>
            <CardContent className="p-8">
              <Form {...form}>
                <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo *</FormLabel>
                          <FormControl>
                            <Input {...field} className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input {...field} className="h-12" type="email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone *</FormLabel>
                          <FormControl>
                            <Input {...field} className="h-12" type="tel" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="birthDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data de Nascimento *</FormLabel>
                          <FormControl>
                            <Input {...field} className="h-12" type="date" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Endereço *</FormLabel>
                        <FormControl>
                          <Input {...field} className="h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Experiência *</FormLabel>
                          <Select defaultValue={field.value} onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Selecione" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="menos-1">Menos de 1 ano</SelectItem>
                              <SelectItem value="1-3">1-3 anos</SelectItem>
                              <SelectItem value="3-5">3-5 anos</SelectItem>
                              <SelectItem value="mais-5">Mais de 5 anos</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="availability"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Disponibilidade *</FormLabel>
                          <Select defaultValue={field.value} onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Selecione" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="tempo-integral">Tempo Integral</SelectItem>
                              <SelectItem value="meio-periodo">Meio Período</SelectItem>
                              <SelectItem value="diaria">Diária</SelectItem>
                              <SelectItem value="fins-de-semana">Fins de Semana</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="specialties"
                    render={() => (
                      <FormItem>
                        <FormLabel>Especialidades *</FormLabel>
                        <div className="grid grid-cols-2 gap-3">
                          {specialtyOptions.map((specialty) => (
                            <FormField
                              key={specialty.id}
                              control={form.control}
                              name="specialties"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={specialty.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(specialty.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, specialty.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== specialty.id,
                                                ),
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal cursor-pointer">
                                      {specialty.label}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Conte um pouco sobre você</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="min-h-[100px]"
                            placeholder="Descreva sua experiência, habilidades especiais e o que te diferencia..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button className="w-full text-lg py-6" size="lg" type="submit">
                    <Star className="w-5 h-5 mr-2" />
                    Cadastrar Perfil
                  </Button>
                </form>
              </Form>
            </CardContent>
          </ApplyFormProvider>
        </Card>
      </div>
    </section>
  )
}
