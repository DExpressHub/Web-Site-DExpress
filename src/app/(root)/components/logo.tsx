'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Skeleton } from '@/components/ui/skeleton'

export function Logo() {
  const pathName = usePathname()

  if (pathName === '/') {
    return <ImageLogo isHandleClick />
  }

  return (
    <Link href="/">
      <ImageLogo />
    </Link>
  )
}

function ImageLogo({ isHandleClick = false }: { isHandleClick?: boolean }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!mounted) {
    return <Skeleton className="h-9 w-28" />
  }

  return (
    <Image
      alt="logo da d-express"
      className="cursor-pointer"
      height={50}
      src={theme === 'dark' ? '/white-logo.png' : '/logo.png'}
      width={146}
      onClick={isHandleClick ? handleClick : undefined}
    />
  )
}
