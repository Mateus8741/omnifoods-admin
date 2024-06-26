'use client'

import { api } from '@/api/api.Config'
import { useUserStorage } from '@/contexts/useUser'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useLayoutEffect, useState } from 'react'

export function Provider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  const { user } = useUserStorage()

  useLayoutEffect(() => {
    const authInterceptor = api.interceptors.request.use((config) => {
      config.headers.Authorization = user?.token
        ? `Bearer ${user.token}`
        : config.headers.Authorization

      return config
    })

    return () => {
      api.interceptors.request.eject(authInterceptor)
    }
  }, [user?.token])

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
