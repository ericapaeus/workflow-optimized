'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // 可以在这里添加错误日志上报
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold">出错了</h2>
        <p className="mt-2 text-muted-foreground">
          {error.message || '发生了一些错误，请稍后再试'}
        </p>
      </div>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>重试</Button>
        <Button variant="outline" onClick={() => window.location.reload()}>
          刷新页面
        </Button>
      </div>
    </div>
  )
} 