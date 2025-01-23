'use client'

import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header, Sidebar, Footer } from '.'

const queryClient = new QueryClient()

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 flex">
        <Sidebar />
        <main className="flex-1 container py-6">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
} 