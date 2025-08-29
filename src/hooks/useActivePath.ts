import { useCallback } from 'react'
import { usePathname } from 'next/navigation'

export function useIsActivePath() {
  const pathname = usePathname()

  const isActive = useCallback(
    (path: string) => {
      return pathname === path
    },
    [pathname],
  )

  return isActive
}
