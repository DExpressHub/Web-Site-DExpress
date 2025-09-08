'use client'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

import { deleteAuthCookies } from '@/actions/deleteAuthCookies'
import { logoutAction } from '@/actions/auth'
import { deleteRedirectedUrl } from '@/lib/redirectUrl'

export function useLogout() {
  const router = useRouter()
  const mutation = useMutation({
    mutationFn: async () => {
      const result = await logoutAction()

      if (!result.success) {
        if (result.error.statusCode === 401) {
          toast.error(result.error.message)

          return
        }
        toast.error('Erro ao efetuar Logout')

        return
      }

      await deleteAuthCookies()
      deleteRedirectedUrl()
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
