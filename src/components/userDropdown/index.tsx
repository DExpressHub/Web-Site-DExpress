'use client'

import { useTheme } from 'next-themes'
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
  name?: string
  email?: string
  avatarUrl?: string
}

export function UserDropdown({ name, email, avatarUrl }: UserDropdownProps) {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const { logout, isPending } = useLogout()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .join('')
    : email
      ? email[0].toUpperCase()
      : 'U'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          {avatarUrl && <AvatarImage alt={name ?? 'Usuário'} src={avatarUrl} />}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>{name ?? email ?? 'Minha Conta'}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => router.push('/profile')}>
          Perfil
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => router.push('/settings')}>
          Configurações
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={toggleTheme}>
          Mudar para {theme === 'light' ? 'escuro' : 'claro'}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer text-red-600" onClick={() => logout()}>
          {isPending ? 'Saindo...' : 'Sair'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
