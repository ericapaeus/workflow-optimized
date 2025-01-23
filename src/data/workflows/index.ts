import type { Workflow } from '@/types/workflow'
import { workflow1 } from './examples/workflow-1'
import { workflow2 } from './examples/workflow-2'
import { workflow3 } from './examples/workflow-3'
import { workflow4 } from './examples/workflow-4'
import { workflow5 } from './examples/workflow-5'

export const workflows: Workflow[] = [
  workflow1,
  workflow2,
  workflow3,
  workflow4,
  workflow5,
]

// 导出常用的数据查询方法
export function getWorkflowById(id: string) {
  return workflows.find((workflow) => workflow.id === id)
}

export function getWorkflowsByCategory(category: string) {
  return workflows.filter((workflow) => workflow.category === category)
}

export function getWorkflowsByTag(tag: string) {
  return workflows.filter((workflow) => workflow.tags.includes(tag))
}

// 获取所有分类
export function getAllCategories() {
  return [...new Set(workflows.map((workflow) => workflow.category))]
}

// 获取所有标签
export function getAllTags() {
  return [...new Set(workflows.flatMap((workflow) => workflow.tags))]
}
