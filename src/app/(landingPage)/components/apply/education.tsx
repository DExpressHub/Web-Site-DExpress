'use client'

import { GraduationCap } from 'lucide-react'

import { useApplyOptions } from './useApplyOptions'
import { useApplyForm } from './applyFormProvider'

import { SelectFormField } from '@/components/SelectFormField'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form'

export function Education() {
  const { form } = useApplyForm()
  const { coursesOptions, highestDegreesOptions } = useApplyOptions()

  return (
    <section className="flex-col flex gap-6 w-full">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Educação</h3>
      </div>

      {/* Select de Grau de Escolaridade */}

        <SelectFormField
          control={form.control}
          items={highestDegreesOptions}
          label="Maior Grau de Escolaridade"
          name="highestDegreeId"
          placeholder="Selecione Maior Grau de Escolaridade"
        />


      <FormField
        control={form.control}
        name="courses"
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="field.value?">Cursos</Label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {coursesOptions.map((course) => {
                const isChecked = field.value?.includes(course.value)

                return (
                  <FormItem
                    key={course.value}
                    className="flex flex-row items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={isChecked}
                        id={course.value}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            field.onChange([...field.value, course.value])
                          } else {
                            field.onChange(field.value.filter((v: string) => v !== course.value))
                          }
                        }}
                      />
                    </FormControl>
                    <Label className="font-normal cursor-pointer" htmlFor={course.value}>
                      {course.label}
                    </Label>
                  </FormItem>
                )
              })}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </section>
  )
}
