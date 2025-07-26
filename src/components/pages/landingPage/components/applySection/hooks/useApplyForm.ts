import React from 'react'

import { ApplyContext } from '../providers'

export function useApplyForm() {
  const context = React.useContext(ApplyContext)

  if (!context) {
    throw new Error('useApplyForm mus used with in ApplyFormProvider')
  }

  return context
}
