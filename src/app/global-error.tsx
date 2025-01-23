'use client'

import { Button } from '@/components/ui/button'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex h-screen flex-col items-center justify-center gap-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">系统错误</h2>
            <p className="mt-2 text-muted-foreground">
              {error.message || '系统发生错误，请稍后再试'}
            </p>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => reset()}>重试</Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              刷新页面
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
} 