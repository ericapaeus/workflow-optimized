import { cn } from '@/lib/utils'

interface ErrorMessageProps {
  message?: string
  className?: string
}

export function ErrorMessage({ message, className }: ErrorMessageProps) {
  if (!message) return null

  return (
    <div className={cn('text-sm text-destructive', className)} role="alert">
      {message}
    </div>
  )
} 