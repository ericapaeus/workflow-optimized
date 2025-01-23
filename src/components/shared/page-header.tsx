interface PageHeaderProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="space-y-2">
      <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-3xl font-bold tracking-tighter text-transparent dark:from-gray-100 dark:to-gray-400">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground">
        {description}
      </p>
      {children}
    </div>
  )
} 