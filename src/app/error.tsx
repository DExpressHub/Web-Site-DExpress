'use client'

import { useCallback } from 'react'

import { deleteAuthCookies } from '@/actions/deleteAuthCookies'
import { deleteRedirectedUrl } from '@/lib/redirectUrl'
import { Button } from '@/components/ui/button'

export default function Error({ error }: { error: Error }) {
  const handleReset = useCallback(async () => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error(error)
    }

    deleteRedirectedUrl()

    try {
      await deleteAuthCookies()
    } finally {
      window.location.href = `/`
    }
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h2 className="text-lg font-semibold mb-4">Something went wrong!</h2>
      <Button type="button" onClick={handleReset}>
        Tente novamente
      </Button>
    </div>
  )
}
