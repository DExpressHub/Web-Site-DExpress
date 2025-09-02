'use client'
import { Building, User } from 'lucide-react'

import { useHireFormClient } from '../form/provider'

export function RequestType() {
  const { user } = useHireFormClient()

  return (
    <div>
      {user.type === 'INDIVIDUAL' ? (
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
