'use client'
import Link from 'next/link'
import { InputFormField } from '@/components/inputFormField'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { links } from '@/config/links'
import { useRequestPasswordForm } from '../hooks/use-request-recovery'
import { LucideLoader2 } from 'lucide-react'

export function RequestRecoveryForm() {
  const { form, onSubmit, isPending } = useRequestPasswordForm()

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <InputFormField
          control={form.control}
          label="E-mail"
          name="email"
          type="email"
          placeholder="seu@email.com"
        />
        <Button className="w-full" disabled={isPending} type="submit">
          {isPending ? (
            <span className="flex items-center gap-2">
              <LucideLoader2 className="animate-spin h-5 w-5" /> Enviando...
            </span>
          ) : (
            'Enviar link de recuperação'
          )}
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          Lembrou a senha?{' '}
          <Link
            className="text-primary hover:underline font-medium"
            href={`/${links.login}`}
          >
            Fazer login
          </Link>
        </p>
      </form>
    </Form>
  )
}
