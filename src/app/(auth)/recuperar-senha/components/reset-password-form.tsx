'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, LucideLoader2 } from 'lucide-react'
import { InputFormField } from '@/components/inputFormField'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { links } from '@/config/links'
import { useResetPasswordForm } from '../hooks/use-reset-password'

interface ResetPasswordFormProps {
  token: string
}

export function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const { form, onSubmit, isPending, isSuccess } = useResetPasswordForm(token)

  if (isSuccess) {
    return (
      <div className="py-12 flex flex-col items-center justify-center gap-4 text-center">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <p className="text-lg font-medium">Senha redefinida!</p>
        <p className="text-sm text-muted-foreground">
          Agora você pode fazer login com a nova senha.
        </p>
        <Button asChild className="w-full">
          <Link href={`/${links.login}`}>Ir para login</Link>
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <InputFormField
          control={form.control}
          label="Nova Senha"
          name="password"
          type="password"
          placeholder="**********"
        />
        <Button className="w-full" disabled={isPending} type="submit">
          {isPending ? (
            <span className="flex items-center gap-2">
              <LucideLoader2 className="animate-spin h-5 w-5" /> Salvando...
            </span>
          ) : (
            'Redefinir senha'
          )}
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          <Link
            className="text-primary hover:underline font-medium"
            href={`/${links.recuperarSenha}`}
          >
            Solicitar novo link
          </Link>
        </p>
      </form>
    </Form>
  )
}
