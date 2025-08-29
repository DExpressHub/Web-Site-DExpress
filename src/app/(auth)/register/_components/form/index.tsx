'use client'
import Link from 'next/link'
import { LucideLoader2 } from 'lucide-react'

import { useRegisterForm } from './useRegisterForm'

import { InputFormField } from '@/components/inputFormField'
import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import { Form } from '@/components/ui/form'

export function RegisterForm() {
  const { form, onSubmit, isPending } = useRegisterForm()

  return (
    <CardContent>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <InputFormField control={form.control} label="Nome" name="firstName" />
          <InputFormField control={form.control} label="Sobrenome" name="lastName" />
          <InputFormField control={form.control} label="Email" name="email" />

          <Button className="w-full cursor-pointer" disabled={isPending} type="submit">
            {isPending ? (
              <span className="flex items-center gap-2">
                <LucideLoader2 className="animate-spin h-5 w-5" /> Criando Conta
              </span>
            ) : (
              <>Criar Conta</>
            )}
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
  )
}
