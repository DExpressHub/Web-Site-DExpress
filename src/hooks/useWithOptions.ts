import React from 'react'

export function useWithOptions() {
  const withAllOptions = React.useCallback(
    <T extends { id: string; name?: string; label?: string }>(
      items: T[],
      getLabel: (item: T) => string,
      withAllOption = true,
    ) => {
      const formattedItems = items.map((i) => ({ value: i.id, label: getLabel(i) }))

      return withAllOption
        ? [{ value: 'all', label: 'Todas' }, ...formattedItems]
        : [...formattedItems]
    },
    [],
  )

  return withAllOptions
}
