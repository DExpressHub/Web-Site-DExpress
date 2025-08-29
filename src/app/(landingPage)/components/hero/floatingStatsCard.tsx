import { Users } from 'lucide-react'

export function FloatingStatsCard() {
  return (
    <div className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-xs rounded-xl p-6 shadow-lg border">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
          <Users className="w-6 h-6 text-success" />
        </div>
        <div>
          <div className="font-bold text-2xl">98%</div>
          <div className="text-sm text-muted-foreground">Satisfação</div>
        </div>
      </div>
    </div>
  )
}
