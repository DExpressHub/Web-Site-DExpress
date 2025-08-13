import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { jobApplicationUseCase } from '@/presentation/factories/useCase/jobApplication'
import { JobApplicationRequest } from '@/core/types/jobApplication'

export function useCreateJobApplication() {
  const mutation = useMutation({
    mutationFn: async (data: JobApplicationRequest) => {
      const result = await jobApplicationUseCase.create.execute(data)

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
