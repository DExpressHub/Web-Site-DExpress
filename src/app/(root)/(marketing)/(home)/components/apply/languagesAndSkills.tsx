'use client'

import { GraduationCap } from 'lucide-react'

import { useApplyOptions } from './useApplyOptions'
import { useApplyForm } from './applyFormProvider'

import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form'

export function LanguagesAndSkills() {
  const { form } = useApplyForm()
  const { languageOptions, skillsOptions } = useApplyOptions()

  return (
    <section className="flex-col flex gap-6 w-full">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Idiomas e Habilidades</h3>
      </div>

      <FormField
        control={form.control}
        name="languages"
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="field.value?">Idiomas</Label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {languageOptions.map((langs) => {
                const isChecked = field.value?.includes(langs.value)

                return (
                  <FormItem
                    key={langs.value}
                    className="flex flex-row items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={isChecked}
                        id={langs.value}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            field.onChange([...field.value, langs.value])
                          } else {
                            field.onChange(field.value.filter((v: string) => v !== langs.value))
                          }
                        }}
                      />
                    </FormControl>
                    <Label className="font-normal cursor-pointer" htmlFor={langs.value}>
                      {langs.label}
                    </Label>
                  </FormItem>
                )
              })}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="skills"
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="field.value?">Habilidades</Label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {skillsOptions.map((skill) => {
                const isChecked = field.value?.includes(skill.value)

                return (
                  <FormItem
                    key={skill.value}
                    className="flex flex-row items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={isChecked}
                        id={skill.value}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            field.onChange([...field.value, skill.value])
                          } else {
                            field.onChange(field.value.filter((v: string) => v !== skill.value))
                          }
                        }}
                      />
                    </FormControl>
                    <Label className="font-normal cursor-pointer" htmlFor={skill.value}>
                      {skill.label}
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
