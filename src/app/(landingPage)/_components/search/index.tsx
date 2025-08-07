import { SearchProvider } from './searchProvider'
import { Section } from './section'

export function SearchSection() {
  return (
    <SearchProvider>
      <Section />
    </SearchProvider>
  )
}
