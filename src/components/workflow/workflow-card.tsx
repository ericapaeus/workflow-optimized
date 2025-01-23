'use client'

import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/utils'
import type { Workflow, WorkflowStatus } from '@/types/workflow'

const statusConfig: Record<
  WorkflowStatus,
  { label: string; className: string }
> = {
  planning: {
    label: '计划中',
    className:
      'bg-yellow-500/10 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400',
  },
  experimental: {
    label: '试验中',
    className:
      'bg-purple-500/10 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400',
  },
  production: {
    label: '已上线',
    className:
      'bg-green-500/10 text-green-700 dark:bg-green-500/20 dark:text-green-400',
  },
}

export function WorkflowCard({ workflow }: { workflow: Workflow }) {
  const status = statusConfig[workflow.status]

  return (
    <Link href={`/workflow/${workflow.id}`} className="flex w-full">
      <Card className="group relative flex flex-1 cursor-pointer flex-col overflow-hidden border-none bg-gradient-to-br from-white to-gray-50 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:from-gray-900 dark:to-gray-800">
        <div
          className={`absolute right-0 top-0 rounded-bl-lg px-2 py-1 text-xs font-medium ${status.className}`}
        >
          {status.label}
        </div>
        <CardHeader>
          <div className="space-y-1">
            <Badge
              variant="outline"
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20"
            >
              {workflow.category}
            </Badge>
            <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
              {workflow.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {workflow.description}
            </p>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2">
            {workflow.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-gradient-to-r from-indigo-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:to-pink-500/20"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-1">
              <span>更新于 {formatDate(workflow.updatedAt)}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>{workflow.views} 次查看</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
