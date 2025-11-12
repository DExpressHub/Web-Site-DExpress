'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useResetPassword } from '@/hooks/auth/useResetPasswordForm'
import { useState } from 'react'

const schema = z.object({
  password: z.string().min(8, 'Mínimo 8 caracteres'),
})

type FormData = z.infer<typeof schema>

export function useResetPasswordForm(token: string) {
  const { resetPasswordAsync, isPending } = useResetPassword()
  const [isSuccess, setIsSuccess] = useState(false)
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { password: '' },
  })

  const onSubmit = async (data: FormData) => {
    const response = await resetPasswordAsync({
      password: data.password,
      token,
    })
    if (response.success) {
      setIsSuccess(true)
      form.reset()
    }
  }

  return { form, onSubmit, isPending, isSuccess }
}
