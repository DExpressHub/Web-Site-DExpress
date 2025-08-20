'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card'
import { Button } from '@/presentation/components/ui/button'
import { Form } from '@/presentation/components/ui/form'
import { InputFormField } from '@/presentation/components/inputFormField'
import { api } from '@/infra/services/ky/api'

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
})

type LoginData = z.infer<typeof loginSchema>

export default function Login() {
  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: LoginData) => {
    try {
      api.post('auth/login', {
        json: {
          email: data.email,
          password: data.password,
        },
      })
    } catch (error) {
      toast.error('Email ou senha incorretos')
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-elegant">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <LogIn className="w-6 h-6 text-primary" />
            Entrar
          </CardTitle>
          <p className="text-muted-foreground">Acesse sua conta</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <InputFormField control={form.control} label="Email" name="email" />
              <InputFormField
                control={form.control}
                label="Senha"
                name="password"
                type="password"
              />
              <Button className="w-full" size="lg" type="submit">
                Entrar
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Não tem uma conta?{' '}
                  <Link className="text-primary hover:underline font-medium" href="/register">
                    Cadastre-se
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
