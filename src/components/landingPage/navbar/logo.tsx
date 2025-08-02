'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export function Logo() {
  const { theme } = useTheme()

  return (
    <Image
      suppressHydrationWarning
      alt="logo"
      className="cursor-pointer"
      height={50}
      src={theme === 'dark' ? '/white-logo.png' : '/logo.png'}
      width={146}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    />
  )
}
