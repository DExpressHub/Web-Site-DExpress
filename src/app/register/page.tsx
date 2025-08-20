'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { UserPlus } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card'
import { Form } from '@/presentation/components/ui/form'
import { InputFormField } from '@/presentation/components/inputFormField'
import { Button } from '@/presentation/components/ui/button'
import { api } from '@/infra/services/ky/api'

const registerSchema = z.object({
  lastName: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  firstName: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
})

type RegisterData = z.infer<typeof registerSchema>

export default function Register() {
  const form = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  })

  const onSubmit = (data: RegisterData) => {
    try {
      api.post('users', {
        json: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          type: 'INDIVIDUAL',
        },
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
      toast.error('Email ou senha incorretos')
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-elegant">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <UserPlus className="w-6 h-6 text-primary" />
            Cadastrar
          </CardTitle>
          <p className="text-muted-foreground">Crie sua conta</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <InputFormField control={form.control} label="Nome" name="firstName" />
              <InputFormField control={form.control} label="Nome" name="lastName" />
              <InputFormField control={form.control} label="Email" name="email" />

              <Button className="w-full" size="lg" type="submit">
                Criar Conta
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Já tem uma conta?{' '}
                  <Link className="text-primary hover:underline font-medium" href="/login">
                    Faça login
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
