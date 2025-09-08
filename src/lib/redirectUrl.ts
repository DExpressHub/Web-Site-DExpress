// lib/redirectUrl.ts
'use client'

export function setRedirectedUrl(url: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('redirectedUrl', url)
  }
}

export function getRedirectedUrl(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('redirectedUrl')
  }

  return null
}

export function deleteRedirectedUrl() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('redirectedUrl')
  }
}
