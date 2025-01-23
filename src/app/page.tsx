import { Suspense } from 'react'
import { PageHeader } from '@/components/shared/page-header'
import { WorkflowGrid } from '@/components/workflow'
import { LoadingSpinner } from '@/components/shared/loading-spinner'

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="工作流程优化展示"
        description="使用 AI 优化各种工作流程的实践演示"
      />
      <div className="flex flex-col gap-6 md:flex-row">
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner size="lg" />}>
            <WorkflowGrid />
          </Suspense>
        </main>
      </div>
    </div>
  )
}
