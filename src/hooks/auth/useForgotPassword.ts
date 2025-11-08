'use client'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { ForgotPasswordRequest } from '@/types/auth'
import { forgotPasswordAction } from '@/actions/auth'

export function useForgotPassword() {
  const mutation = useMutation({
    mutationFn: async (data: ForgotPasswordRequest) => {
      const result = await forgotPasswordAction(data)
      if (!result.success) {
        toast.error(
          result.error.message ?? 'Erro ao solicitar redefinição de senha',
        )
        return result
      }
      toast.success(result.data.message)
      return result
    },
  })

  return {
    forgotPassword: mutation.mutate,
    forgotPasswordAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
  }
}
