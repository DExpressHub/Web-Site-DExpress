'use client'

import { useSearch } from './searchProvider'

export function Result() {
  const { result } = useSearch()

  return (
    <div className="mt-12 text-center">
      {result?.success && result.data.data.length > 0 ? (
        <></>
      ) : (
        <p className="text-muted-foreground">Nenhum Profissional Encontrado</p>
      )}
    </div>
  )
}
