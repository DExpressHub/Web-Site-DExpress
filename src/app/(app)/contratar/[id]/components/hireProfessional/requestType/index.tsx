import { Building, User } from 'lucide-react'

export function RequestType({ requesterType }: { requesterType: 'INDIVIDUAL' | 'CORPORATE' }) {
  return (
    <div>
      {requesterType === 'INDIVIDUAL' ? (
        <div className="flex items-center space-x-2">
          <span className="flex items-center gap-2 cursor-pointer">
            <User size={16} />
            Pessoa Individual
          </span>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <span className="flex items-center gap-2 cursor-pointer">
            <Building size={16} />
            Empresa
          </span>
        </div>
      )}
    </div>
  )
}
