'use client'

import { useEffect, useState } from 'react'
import { LucideLoader2 } from 'lucide-react'

import { deleteAuthCookies } from '@/actions/deleteAuthCookies'
import { links } from '@/config/links'
import { deleteRedirectedUrl } from '@/lib/redirectUrl'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const [isRedirecting, setIsRedirecting] = useState(false)

  useEffect(() => {
    if (error.message === 'UnauthorizedError') {
      setIsRedirecting(true)

      deleteAuthCookies().finally(() => {
        window.location.href = `/${links.login}`
      })
      deleteRedirectedUrl()
    }
  }, [error])

  if (isRedirecting) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LucideLoader2 className="animate-spin h-10 w-10" />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h2 className="text-lg font-semibold mb-4">Something went wrong!</h2>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  )
}
