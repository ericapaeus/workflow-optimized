'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { usePathname } from 'next/navigation'
import { getAllCategories, getAllTags } from '@/data/workflows'

export function Sidebar() {
  const pathname = usePathname()
  const categories = getAllCategories()
  const tags = getAllTags()

  return (
    <aside className="hidden w-[240px] flex-col md:flex">
      <ScrollArea className="flex-1 py-6 px-4">
        <div className="space-y-4">
          <div className="py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">分类</h2>
            <div className="space-y-1">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={pathname === `/category/${category}` ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div className="py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">标签</h2>
            <div className="flex flex-wrap gap-2 px-2">
              {tags.map((tag) => (
                <Button key={tag} variant="outline" size="sm">
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
} 