export type WorkflowStatus = 'planning' | 'experimental' | 'production'

export interface WorkflowContent {
  video?: string
  tools: {
    name: string
    url: string
    description: string
  }[]
  steps: {
    title: string
    details: string[]
  }[]
  markdown?: {
    scenarioDescription: string
    purpose: string
    keyPoints: string[]
    expectedResults: string[]
  }
}

export interface Workflow {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  status: WorkflowStatus
  thumbnail?: string
  updatedAt: string
  views: number
  likes: number
  content?: WorkflowContent
}
