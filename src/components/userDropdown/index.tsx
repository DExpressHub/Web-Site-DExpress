'use client'

import Link from 'next/link'

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
import { links } from '@/config/links'

interface UserDropdownProps {
  firstName?: string
  lastName?: string
  email?: string
  avatarUrl?: string
}

export function UserDropdown({ firstName, lastName, avatarUrl }: UserDropdownProps) {
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
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        {/* <DropdownMenuItem className="cursor-pointer" onClick={() => router.push('/profile')} /> */}
        <DropdownMenuItem className="cursor-pointer">
          <Link className="w-full h-full" href={links.solicitacoes}>
            Solicitações
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer text-red-600" onClick={() => logout()}>
          {isPending ? 'Saindo...' : 'Sair'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
