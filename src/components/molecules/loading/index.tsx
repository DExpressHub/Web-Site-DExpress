'use client'
import { Spinner } from '@heroui/react'
import Image from 'next/image'

export function Loading() {
  return (
    <div className="fixed inset-0">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <Image alt="Logo" height={60} src="/logo.png" width={60} />
          <Spinner
            color="primary"
            label="Carregando"
            labelColor="primary"
            size="lg"
            variant="wave"
          />
        </div>
      </div>
    </div>
  )
}
