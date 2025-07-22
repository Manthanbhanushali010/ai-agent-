"use client"

import { QueryClient, QueryClientProvider, HydrationBoundary } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import React, { useState, Suspense } from "react"
import superjson from "superjson"
import { trpc } from "@/lib/trpc"
import { LoadingState } from "@/components/ui/loading-state"
import { ErrorState } from "@/components/ui/error-state"

interface TRPCProviderProps {
  children: React.ReactNode
  dehydratedState?: unknown
}

export function TRPCProvider({ children, dehydratedState }: TRPCProviderProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 1000,
        retry: (failureCount, error) => {
          // Don't retry on 401 errors
          if (error?.message?.includes('UNAUTHORIZED')) {
            return false
          }
          return failureCount < 3
        },
      },
    },
  }))

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "/api/trpc",
          async headers() {
            return {
              // Authorization headers will be handled by Better Auth automatically
            }
          },
          transformer: superjson,
        }),
      ],
    })
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={dehydratedState}>
          <Suspense fallback={<LoadingState message="Loading application..." />}>
            <TRPCErrorBoundary>
              {children}
            </TRPCErrorBoundary>
          </Suspense>
        </HydrationBoundary>
      </QueryClientProvider>
    </trpc.Provider>
  )
}

// Error boundary for TRPC errors
class TRPCErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('TRPC Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorState
          message="Something went wrong with the application. Please refresh the page."
          onRetry={() => {
            this.setState({ hasError: false, error: undefined })
            window.location.reload()
          }}
        />
      )
    }

    return this.props.children
  }
} 