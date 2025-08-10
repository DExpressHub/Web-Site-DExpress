import { Send } from 'lucide-react'

import { useApplyForm } from './applyFormProvider'
import { PersonalInfo } from './personalInfo'

import { Form } from '@/presentation/components/ui/form'
import { Button } from '@/presentation/components/ui/button'

export function ApplyForm() {
  const { onSubmit, form } = useApplyForm()

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <PersonalInfo />

        {/* <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Endereço *</FormLabel>
              <FormControl>
                <Input {...field} className="h-12" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experiência *</FormLabel>
                <Select defaultValue={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="menos-1">Menos de 1 ano</SelectItem>
                    <SelectItem value="1-3">1-3 anos</SelectItem>
                    <SelectItem value="3-5">3-5 anos</SelectItem>
                    <SelectItem value="mais-5">Mais de 5 anos</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="availability"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Disponibilidade *</FormLabel>
                <Select defaultValue={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="tempo-integral">Tempo Integral</SelectItem>
                    <SelectItem value="meio-periodo">Meio Período</SelectItem>
                    <SelectItem value="diaria">Diária</SelectItem>
                    <SelectItem value="fins-de-semana">Fins de Semana</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div> */}

        {/* <FormField
          control={form.control}
          name="specialties"
          render={() => (
            <FormItem>
              <FormLabel>Especialidades *</FormLabel>
              <div className="grid grid-cols-2 gap-3">
                {specialtyOptions.map((specialty) => (
                  <FormField
                    key={specialty.id}
                    control={form.control}
                    name="specialties"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={specialty.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(specialty.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, specialty.id])
                                  : field.onChange(
                                      field.value?.filter((value) => value !== specialty.id),
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            {specialty.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <Button className="w-full text-lg cursor-pointer py-6" size="lg" type="submit">
          <Send className="w-5 h-5 mr-2" />
          Enviar
        </Button>
      </form>
    </Form>
  )
}
