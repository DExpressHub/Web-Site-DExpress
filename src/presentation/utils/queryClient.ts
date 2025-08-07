import { QueryClient } from '@tanstack/react-query'

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Com SSR, geralmente queremos definir um staleTime padrão
        // maior que zero para evitar re-fetch imediato no cliente
        staleTime: 60 * 1000, // 1 minuto
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

export function getQueryClient() {
  if (typeof window === 'undefined') {
    // Servidor: sempre cria um novo query client
    return makeQueryClient()
  } else {
    // Browser: cria um novo client se não existir
    if (!browserQueryClient) browserQueryClient = makeQueryClient()

    return browserQueryClient
  }
}
