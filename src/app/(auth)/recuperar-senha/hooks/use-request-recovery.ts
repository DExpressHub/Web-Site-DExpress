'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForgotPassword } from '@/hooks/auth/useForgotPassword'

const requestPasswordSchema = z.object({
  email: z.string().email('Email inválido'),
})

type RequestPasswordFormData = z.infer<typeof requestPasswordSchema>

export function useRequestPasswordForm() {
  const { forgotPasswordAsync, isPending } = useForgotPassword()

  const form = useForm<RequestPasswordFormData>({
    resolver: zodResolver(requestPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(data: RequestPasswordFormData) {
    const response = await forgotPasswordAsync({
      email: data.email,
    })
    if (!response.success) {
      return
    }

    form.reset()
  }

  return { form, onSubmit, isPending }
}
