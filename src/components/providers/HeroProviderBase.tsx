'use client'

import {HeroUIProvider} from '@heroui/react'

export function HeroProviderBase({children}: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}