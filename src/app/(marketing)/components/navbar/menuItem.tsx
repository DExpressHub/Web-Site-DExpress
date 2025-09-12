'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { useNavItem } from './useNavItem'

import { cn } from '@/utils/cn'
import { useScrollTo } from '@/hooks/useScrollTo'

export function MenuItem({ className }: { className?: string }) {
  const pathname = usePathname()
  const navItems = useNavItem()

  return (
    <nav className={cn('hidden xl:flex items-center', className)}>
      {navItems.map((item) => (
        <>
          {pathname === '/' ? (
            <ButtonNavigation
              key={item.label}
              className="text-muted-foreground"
              href={item.href}
              label={item.label}
            />
          ) : (
            <CustomLink
              key={item.label}
              className="text-muted-foreground"
              href={`/#${item.href}`}
              label={item.label}
            />
          )}
        </>
      ))}
    </nav>
  )
}

export function MenuItemMobile({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname()
  const navItems = useNavItem()

  return (
    <nav className="flex flex-col space-y-4">
      {navItems.map((item) => (
        <>
          {pathname === '/' ? (
            <ButtonNavigation
              key={item.label}
              className="text-left text-foreground"
              href={item.href}
              label={item.label}
              onClose={onClose}
            />
          ) : (
            <CustomLink
              key={item.label}
              className="text-left text-foreground"
              href={`/#${item.href}`}
              label={item.label}
              onClose={onClose}
            />
          )}
        </>
      ))}
    </nav>
  )
}
type ButtonNavigationProps = {
  label: string
  href: string
  onClose?: () => void
  className?: string
}
function ButtonNavigation({ href, label, onClose, className }: ButtonNavigationProps) {
  const scrollToSection = useScrollTo({ onScrollEnd: onClose })

  return (
    <button
      className={cn(
        'cursor-pointer font-medium hover:text-primary cursor-pointer transition-colors font-medium',
        className,
      )}
      onClick={() => scrollToSection(href)}
    >
      {label}
    </button>
  )
}
type CustomLinkProps = {
  label: string
  href: string
  onClose?: () => void
  className?: string
}
function CustomLink({ href, label, className, onClose }: CustomLinkProps) {
  return (
    <Link
      key={label}
      className={cn(
        'cursor-pointer font-medium hover:text-primary cursor-pointer transition-colors font-medium',
        className,
      )}
      href={href}
      onClick={onClose}
    >
      {label}
    </Link>
  )
}
