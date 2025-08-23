'use client'
import Link from 'next/link'
import { LucideLoader2 } from 'lucide-react'

import { useLoginForm } from './useLoginForm'

import { InputFormField } from '@/presentation/components/inputFormField'
import { Button } from '@/presentation/components/ui/button'
import { CardContent } from '@/presentation/components/ui/card'
import { Form } from '@/presentation/components/ui/form'

export function LoginForm() {
  const { form, onSubmit, isPending } = useLoginForm()

  return (
    <CardContent>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <InputFormField control={form.control} label="Email" name="email" />
          <InputFormField control={form.control} label="Senha" name="password" />

          <Button className="w-full cursor-pointer" disabled={isPending} type="submit">
            {isPending ? (
              <span className="flex items-center gap-2">
                <LucideLoader2 className="animate-spin h-5 w-5" /> Entrando
              </span>
            ) : (
              <>Entrar</>
            )}
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
  )
}
