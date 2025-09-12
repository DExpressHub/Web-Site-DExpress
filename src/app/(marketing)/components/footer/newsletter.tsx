'use client'

import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { InputFormField } from '@/components/inputFormField'
import { newsletterAction } from '@/actions/newsletter'

const formSchema = z.object({
  email: z.string().email('Digite um email valido'),
})

export function Newsletter() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await newsletterAction(values.email)

    if (!result.success) {
      toast.error(result.error.message)

      return
    }
    toast.success(result.data.message)
    form.reset({ email: '' })
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-2" onSubmit={form.handleSubmit(onSubmit)}>
        <InputFormField
          control={form.control}
          name="email"
          placeholder="Fique por dentro das novidades"
          type="email"
        />
        <Button
          className="whitespace-nowrap cursor-pointer w-fit"
          disabled={form.formState.isSubmitting}
          type="submit"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="animate-spin w-4 h-4" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Inscrever-se
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}
