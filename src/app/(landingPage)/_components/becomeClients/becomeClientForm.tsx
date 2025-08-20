'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import React from 'react'
import { LoaderCircle, Send } from 'lucide-react'

import { useBecomeClient } from './becomeClientContext'
import { useBecomeClientOptions } from './useBecomeClientOptions'

import { Form } from '@/presentation/components/ui/form'
import { InputFormField } from '@/presentation/components/inputFormField'
import { Button } from '@/presentation/components/ui/button'
import { SelectFormField } from '@/presentation/components/SelectFormField'
import { TextareaFormField } from '@/presentation/components/textareaFormField'
import { useListAllDistrictsByIdCity } from '@/presentation/hooks/district/useListAllDistrictsByCityId'
import { District } from '@/core/types/district'
import { Plan } from '@/core/types/plan'
import { useServiceRequestsUseCase } from '@/presentation/hooks/servicesRequests/useCreateServicesRequest'
const districtOption = (districts: District[]) =>
  districts.map((district) => ({ value: district.id, label: district.name }))
const phoneRegex = /^(?:\+244|244)?\s?9\d{8}$/
const phoneNumber = z.string().regex(phoneRegex, 'Número inválido')
const optionsPlan = (plans: Pick<Plan, 'name' | 'id'>[]) =>
  plans.map((p) => ({ value: p.id, label: p.name }))
// ✅ Schema com validação mais rica
const formSchema = z.object({
  planId: z.string().min(1, { message: 'Escolha um plano' }),
  companyRequesterName: z.string().min(2, { message: 'Nome da empresa é obrigatório' }),
  companyNif: z
    .string()
    .min(5, { message: 'NIF é obrigatório' })
    .regex(/^\d+$/, 'NIF deve conter apenas números'),
  companyAddress: z.string().min(5, { message: 'Endereço é obrigatório' }),
  companyDistrictId: z.string().min(1, { message: 'Distrito é obrigatório' }),
  companyCityId: z.string().min(1, { message: 'Cidade é obrigatório' }),
  companySectorId: z.string().min(1, { message: 'Setor é obrigatório' }),
  description: z.string().min(10, { message: 'Descrição deve ter pelo menos 10 caracteres' }),
  requesterPhoneNumber: phoneNumber,
  requesterEmail: z.string().email({ message: 'Email inválido' }),
  serviceFrequency: z.string().min(1, { message: 'Frequência de serviço é obrigatória' }),
})

const serviceFrequency = [
  { value: 'MONTHLY', label: 'Mensal' },
  { value: 'BIMONTHLY', label: 'Bimestral' },
  { value: 'QUARTERLY', label: 'Trimestral' },
  { value: 'SEMIANNUALLY', label: 'Semestral' },
  { value: 'ANNUALLY', label: 'Anual' },
  { value: 'BIENNIALLY', label: 'Bienal ' },
]

export function BecomeClientForm() {
  const { plans, planId } = useBecomeClient()
  const { citiesOptions, sectoresOptions } = useBecomeClientOptions()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      planId: '',
      companyRequesterName: '',
      companyNif: '',
      companyAddress: '',
      companyDistrictId: '',
      companySectorId: '',
      companyCityId: '',
      description: '',
    },
  })

  const selectedCityId = form.watch('companyCityId')
  const { isPending, createServiceRequest } = useServiceRequestsUseCase()
  const { districts, isFetching } = useListAllDistrictsByIdCity(selectedCityId, !!selectedCityId)

  function onSubmit(data: z.infer<typeof formSchema>) {
    createServiceRequest({
      requesterType: 'CORPORATE',
      requesterEmail: data.requesterEmail,
      requesterPhoneNumber: data.requesterPhoneNumber,
      companyRequesterName: data.companyRequesterName,
      companyNif: data.companyNif,
      companyAddress: `${citiesOptions.find((c) => c.value === data.companyCityId)?.label}, ${districts.find((d) => d.id === data.companyDistrictId)?.name}, ${data.companyAddress}`,
      companyDistrictId: data.companyDistrictId,
      companySectorId: data.companySectorId,
      description: data.description,
      serviceFrequency: data.serviceFrequency,
      planId: data.planId,
    })
  }
  React.useEffect(() => {
    if (planId) {
      form.setValue('planId', planId, { shouldValidate: true })
    }
  }, [planId, form])

  return (
    <Form {...form}>
      <form className="space-y-8 max-w-3xl mx-auto" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputFormField
            control={form.control}
            label="Nome da Empresa"
            name="companyRequesterName"
          />
          <InputFormField control={form.control} label="NIF" name="companyNif" />
          <InputFormField control={form.control} label="Email" name="requesterEmail" />
          <InputFormField control={form.control} label="Telefone" name="requesterPhoneNumber" />
        </div>
        {/* Dados da empresa */}

        <TextareaFormField
          control={form.control}
          label="Descrição"
          name="description"
          placeholder="Fale brevemente do seu negócio"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectFormField
            control={form.control}
            items={citiesOptions}
            label="Cidade"
            name="companyCityId"
            placeholder="Selecione um distrito"
          />
          <SelectFormField
            control={form.control}
            disabled={!selectedCityId || isFetching}
            items={districtOption(districts)}
            label="Distrito"
            name="companyDistrictId"
            placeholder={isFetching ? 'Carregando...' : 'Distrito'}
          />
        </div>
        <InputFormField control={form.control} label="Endereço" name="companyAddress" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectFormField
            control={form.control}
            //TODO: buscar os setor pela api
            items={sectoresOptions}
            label="Setor"
            name="companySectorId"
            placeholder="Selecione um setor"
          />
          <SelectFormField
            control={form.control}
            items={optionsPlan(plans)}
            label="Plano"
            name="planId"
            placeholder="Selecione um plano"
          />
        </div>

        <SelectFormField
          control={form.control}
          items={serviceFrequency}
          label="
Frequência de serviço"
          name="serviceFrequency"
          placeholder="Selecione a
Frequência"
        />

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
      </form>
    </Form>
  )
}
