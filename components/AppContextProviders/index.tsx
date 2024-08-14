'use client'

import { SearchContextProvider } from '../../contexts/SearchContext'

import { ReactNode } from 'react'

export function AppContextProviders({ children }: { children: ReactNode }) {
  return <SearchContextProvider>{children}</SearchContextProvider>
}
