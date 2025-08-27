'use client'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

import { authUseCase } from '@/presentation/factories/useCase/auth'
import { deleteAuthCookies } from '@/presentation/actions/deleteAuthCookies'

export function useLogout() {
  const router = useRouter()
  const mutation = useMutation({
    mutationFn: async () => {
      const result = await authUseCase.logout.execute()

      if (!result.success) {
        if (result.error.statusCode === 401) {
          toast.error(result.error.message)

          return
        }
        toast.error('Erro ao efetuar Logout')

        return
      }

      await deleteAuthCookies()
      toast.success('Logout efetuado com sucesso!')
      router.refresh()
    },
  })

  return {
    logout: mutation.mutate,
    logoutAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
  }
}
