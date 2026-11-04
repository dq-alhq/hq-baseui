import type { Page } from "@/utils/find-neighbour"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { cn } from "cn"

interface PagerProps {
  next: Page | null
  prev: Page | null
  className?: string
}

export function Pager({ next, prev, className }: PagerProps) {
  if (!prev && !next) {
    return null
  }

  return (
    <div className={cn("not-typeset mt-6 flex w-full justify-between gap-3 sm:mt-12", className)}>
      {prev ? (
        <div className="group max-w-[50%] min-w-0">
          <Link
            className="hover:bg-muted inline-flex min-h-10 items-center gap-2 gap-x-2 rounded-lg border px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] transition sm:min-h-9 sm:px-3 sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6"
            params={{ _splat: prev.slug }}
            to="/docs/$"
          >
            <IconChevronLeft className="size-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />
            <span className="text-foreground line-clamp-1">{prev.title}</span>
          </Link>
        </div>
      ) : (
        <div />
      )}

      {next && (
        <div className="group ml-auto max-w-[50%] min-w-0">
          <Link
            className="hover:bg-muted inline-flex min-h-10 items-center gap-2 gap-x-2 rounded-lg border px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] transition sm:min-h-9 sm:px-3 sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6"
            params={{ _splat: next.slug }}
            to="/docs/$"
          >
            <span className="text-foreground line-clamp-1">{next.title}</span>
            <IconChevronRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      )}
    </div>
  )
}
