'use client'
import Image from 'next/image'

export function Logo() {
  return (
    <Image
      alt="logo"
      className="cursor-pointer"
      height={50}
      src="/logo.png"
      width={146}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    />
  )
}
