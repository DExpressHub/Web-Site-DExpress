'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Image
        alt="Logo claro"
        className="block dark:hidden cursor-pointer"
        height={50}
        src="/logo.png"
        width={146}
        onClick={isHandleClick ? handleClick : undefined}
      />

      <Image
        alt="Logo escuro"
        className="hidden dark:block cursor-pointer"
        height={50}
        src="/logo-white.png"
        width={146}
        onClick={isHandleClick ? handleClick : undefined}
      />
    </>
  )
}
