'use client'
import { ReactNode } from 'react'
import { SearchProvider } from '@/contexts/SearchContext'

export function AppContextProviders({ children }: { children: ReactNode }) {
  return <SearchProvider>{children}</SearchProvider>
}
