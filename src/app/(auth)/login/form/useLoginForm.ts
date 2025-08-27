'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useLogin } from '@/presentation/hooks/auth/useLogin'
const registerSchema = z.object({
  password: z.string().min(1, 'Password é obrigatório').max(50, 'Password é muito longo'),
  email: z.string().email('Email inválido').max(100, 'Email é muito longo'),
})

type RegisterData = z.infer<typeof registerSchema>
export function useLoginForm() {
  const form = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const { login, isPending } = useLogin()

  const onSubmit = (data: RegisterData) => {
    login({
      password: data.password,
      email: data.email,
    })
  }

  return { onSubmit, form, isPending }
}
