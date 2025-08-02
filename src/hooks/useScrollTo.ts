import { useCallback } from 'react'

type UseScrollToSectionProps = {
  onScrollEnd?: () => void
}

export function useScrollTo({ onScrollEnd }: UseScrollToSectionProps = {}) {
  const scrollToSection = useCallback(
    (target: string) => {
      const element = document.getElementById(target)

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        if (onScrollEnd) {
          onScrollEnd()
        }
      }
    },
    [onScrollEnd],
  )

  return scrollToSection
}
