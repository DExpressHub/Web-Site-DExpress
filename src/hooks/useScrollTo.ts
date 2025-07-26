import { useCallback } from 'react'

type UseScrollToSectionProps = {
  onScrollEnd?: () => void
}

export function useScrollTo({ onScrollEnd }: UseScrollToSectionProps = {}) {
  const scrollToSection = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId)

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
