import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { JobApplicationRequest } from '@/types/jobApplication'
import { createJobApplicationAction } from '@/actions/jobApplication'

export function useCreateJobApplication() {
  const mutation = useMutation({
    mutationFn: async (data: JobApplicationRequest) => {
      const result = await createJobApplicationAction(data)

      if (!result.success) {
        toast.error('Erro ao enviar candidatura')

        return null
      }

      toast.success('Candidatura enviada com sucesso!')

      return result
    },
  })

  return {
    createJobApplication: mutation.mutate,
    createJobApplicationAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
  }
}
