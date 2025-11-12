import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

type ProfessionalCoursesProps = {
  courses: Array<{ course: { label: string } }>
}

export function ProfessionalCourses({ courses }: ProfessionalCoursesProps) {
  if (courses.length === 0) return null

  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-foreground mb-4">
        Cursos e Certificações
      </h3>
      <div className="flex flex-wrap gap-2">
        {courses.map((item, index) => (
          <Badge key={index} variant="outline">
            {item.course.label}
          </Badge>
        ))}
      </div>
    </div>
  )
}
