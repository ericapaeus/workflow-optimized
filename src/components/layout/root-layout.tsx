'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header, Sidebar, Footer } from '.'

const queryClient = new QueryClient()

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="container flex-1 py-6">{children}</main>
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  )
}
