import { Button } from "@/components/ui/button"

interface ErrorStateProps {
  message?: string
  onRetry?: () => void
  showRetry?: boolean
}

export function ErrorState({ 
  message = "Something went wrong. Please try again.",
  onRetry,
  showRetry = true
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-4 text-4xl">⚠️</div>
      <h3 className="mb-2 text-lg font-semibold">Oops!</h3>
      <p className="mb-4 text-sm text-muted-foreground max-w-md">
        {message}
      </p>
      {showRetry && onRetry && (
        <Button onClick={onRetry} variant="outline">
          Try Again
        </Button>
      )}
    </div>
  )
} 