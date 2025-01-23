import { notFound } from 'next/navigation'
import { getWorkflowById } from '@/data/workflows'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { markdownToHtml } from '@/lib/markdown'

interface WorkflowPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function WorkflowPage({ params }: WorkflowPageProps) {
  const { id } = await params
  const workflow = getWorkflowById(id)

  if (!workflow) notFound()

  // 转换 markdown 内容为 HTML
  const scenarioHtml = await markdownToHtml(
    workflow.content?.markdown?.scenarioDescription || ''
  )
  const purposeHtml = await markdownToHtml(
    workflow.content?.markdown?.purpose || ''
  )

  return (
    <div className="container py-6">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-3xl font-bold tracking-tighter text-transparent dark:from-gray-100 dark:to-gray-400">
            {workflow.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Badge
                variant="outline"
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20"
              >
                {workflow.category}
              </Badge>
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
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{workflow.views} 次查看</span>
              <span>{workflow.likes} 次点赞</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground">
            {workflow.description}
          </p>
        </div>

        {workflow.content && (
          <div className="space-y-8">
            {workflow.content.video && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">演示视频</h2>
                <Button variant="outline" asChild>
                  <a
                    href={workflow.content.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    观看视频
                  </a>
                </Button>
              </div>
            )}

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">工具集</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {workflow.content.tools.map((tool) => (
                  <div key={tool.name} className="rounded-lg border p-4">
                    <h3 className="font-medium">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {tool.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">实施步骤</h2>
              <div className="space-y-6">
                {workflow.content.steps.map((step, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-xl font-medium">{step.title}</h3>
                    <ul className="list-inside list-disc space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {workflow.content?.markdown && (
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="space-y-8">
              <div>
                <h2>场景描述</h2>
                <div
                  className="markdown-content"
                  dangerouslySetInnerHTML={{ __html: scenarioHtml }}
                />
              </div>

              <div>
                <h2>实现目的</h2>
                <div
                  className="markdown-content"
                  dangerouslySetInnerHTML={{ __html: purposeHtml }}
                />
              </div>

              <div>
                <h2>关键要点</h2>
                <ul>
                  {workflow.content.markdown.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2>预期效果</h2>
                <ul>
                  {workflow.content.markdown.expectedResults.map(
                    (result, index) => (
                      <li key={index}>{result}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
