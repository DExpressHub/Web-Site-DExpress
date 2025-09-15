type ProfessionalStatsProps = {
  professional: {
    experienceLevel: { label: string }
    rating?: number
    completedJobs?: number
  }
}

export function ProfessionalStats({ professional }: ProfessionalStatsProps) {
  const completedJobs = professional.completedJobs || 0
  const rating = professional.rating || 0

  return (
    <div className="border-t border-border pt-6 mt-6">
      <h3 className="font-semibold text-foreground mb-4">Estatísticas</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{completedJobs}</div>
          <div className="text-sm text-muted-foreground">Trabalhos concluídos</div>
        </div>
        {rating > 0 && (
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{rating}</div>
            <div className="text-sm text-muted-foreground">Avaliação média</div>
          </div>
        )}
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">
            {professional.experienceLevel.label}
          </div>
          <div className="text-sm text-muted-foreground">Nível experiência</div>
        </div>
      </div>
    </div>
  )
}
