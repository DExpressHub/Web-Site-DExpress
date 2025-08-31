'use client'

import { z } from 'zod'
import { LoaderCircle, Send } from 'lucide-react'

import { formSchema, useHireFormClient } from './provider'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { SelectFormField } from '@/components/SelectFormField'
import { TextareaFormField } from '@/components/textareaFormField'
import { serviceFrequency } from '@/constants'
import { useServiceRequestsUseCase } from '@/hooks/servicesRequests/useCreateServicesRequest'
import { ProfessionalDetails } from '@/types/professional'

export const HireForm = ({ professional }: { professional: ProfessionalDetails }) => {
  const { isPending, createServiceRequestAsync } = useServiceRequestsUseCase()
  const { form } = useHireFormClient()

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const result = await createServiceRequestAsync({
      requesterType: 'INDIVIDUAL',
      description: data.description,
      serviceFrequency: data.serviceFrequency,
      requesterEmail: 'canhanga96@gmail.com',
      requesterPhoneNumber: '912345678',
      individualRequesterName: 'Domingos Canhanga',
      individualIdentityNumber: '123456789AZ0',
      individualAddress: 'Luanda, Cabombo',
      individualUserId: '959132ab-9385-446c-8589-1ce8a59cf5d6',
      professionalId: professional.id,
    })

    if (result?.success) {
      form.reset({
        description: '',
        serviceFrequency: '',
      })
    }
  }

  return (
    <Form {...form}>
      <form className="lg:col-span-2" onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="p-6">
          <div className="space-y-6">
            <div className="pt-6">
              <h3 className="font-semibold text-foreground mb-4">Detalhes do Serviço</h3>
              <div className="space-y-4">
                <SelectFormField
                  control={form.control}
                  items={serviceFrequency}
                  label="Frequência de serviço"
                  name="serviceFrequency"
                  placeholder="Selecione a Frequência"
                />
                <TextareaFormField
                  control={form.control}
                  label="Descrição"
                  name="description"
                  placeholder=""
                />
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button className="cursor-pointer" disabled={isPending} type="submit">
                {isPending ? (
                  <>
                    <LoaderCircle className="w-5 h-5 animate-spin mr-2" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar
                  </>
                )}
              </Button>
              <Button
                className="cursor-pointer"
                type="button"
                variant="outline"
                onClick={() => form.reset({ description: '', serviceFrequency: '' })}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </Card>
      </form>
    </Form>
  )
}
