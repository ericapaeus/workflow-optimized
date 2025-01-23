'use client'

import { useWorkflows } from '@/hooks/use-workflows'
import { WorkflowCard } from './workflow-card'

export function WorkflowGrid() {
  const { data: workflows = [] } = useWorkflows()

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {workflows.map((workflow) => (
        <div key={workflow.id} className="flex">
          <WorkflowCard workflow={workflow} />
        </div>
      ))}
    </div>
  )
} 