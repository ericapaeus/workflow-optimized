import { useQuery } from '@tanstack/react-query'
import { fetchApi } from '@/lib/fetch-api'
import type { Workflow } from '@/types/workflow'

export function useWorkflows() {
  return useQuery<Workflow[]>({
    queryKey: ['workflows'],
    queryFn: () => fetchApi<Workflow[]>('/api/workflows')
  })
} 