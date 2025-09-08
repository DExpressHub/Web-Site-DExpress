'use server'

import { cookies } from 'next/headers'

export async function setRedirectedUrlAction(url: string) {
  const cookieStore = await cookies()

  cookieStore.set('redirectedUrl', url)
}

export async function getRedirectedUrlAction() {
  const cookieStore = await cookies()

  const url = cookieStore.get('redirectedUrl')?.value

  console.log(url)

  return url
}

export async function deleteRedirectedUrlAction() {
  const cookieStore = await cookies()

  cookieStore.delete('redirectedUrl')
}
