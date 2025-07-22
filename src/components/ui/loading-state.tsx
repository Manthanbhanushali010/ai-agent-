interface LoadingStateProps {
  message?: string
  size?: "sm" | "md" | "lg"
}

export function LoadingState({ 
  message = "Loading...", 
  size = "md" 
}: LoadingStateProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  }

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className={`animate-spin rounded-full border-4 border-primary border-t-transparent ${sizeClasses[size]} mb-4`} />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  )
} 