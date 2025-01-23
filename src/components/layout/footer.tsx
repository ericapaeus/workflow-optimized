import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
        <div>
          <Link
            href="/pest-monitor"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            病虫害监测
          </Link>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2024 PGG2. All rights reserved.
        </p>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm">
            关于
          </Button>
          <Button variant="ghost" size="sm">
            联系我们
          </Button>
        </div>
      </div>
    </footer>
  )
}
