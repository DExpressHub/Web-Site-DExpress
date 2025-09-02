'use client'

import { useRouter } from 'next/navigation'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useLogout } from '@/hooks/auth/useLogout'

interface UserDropdownProps {
  firstName?: string
  lastName?: string
  email?: string
  avatarUrl?: string
}

export function UserDropdown({ firstName, lastName, email, avatarUrl }: UserDropdownProps) {
  const router = useRouter()

  const { logout, isPending } = useLogout()

  const initials =
    firstName && lastName
      ? firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()
      : 'U'
  const name = firstName && lastName ? `${firstName} ${lastName}` : 'Usuário'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          {avatarUrl && <AvatarImage alt={firstName ?? 'Usuário'} src={avatarUrl} />}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col gap-2 justify-center items-center">
          <span>{name}</span>
          <span>{email ?? 'Minha Conta'}</span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => router.push('/profile')}>
          Perfil
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => router.push('/settings')}>
          Configurações
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer text-red-600" onClick={() => logout()}>
          {isPending ? 'Saindo...' : 'Sair'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
