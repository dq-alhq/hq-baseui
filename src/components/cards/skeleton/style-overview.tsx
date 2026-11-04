import { Skeleton } from "@/components/ui/skeleton"

export function StyleOverviewSkeleton() {
  return (
    <div className="grid gap-2">
      <div>
        <Skeleton className="my-1 h-6 w-sm" />
        <Skeleton className="my-1 h-6 w-md" />
        <Skeleton className="mt-1 h-6 w-md" />
      </div>
      <div className="flex flex-wrap gap-1.5">
        {Array.from({ length: 13 }).map((_, i) => (
          <div className="flex flex-col flex-wrap items-center gap-2" key={i}>
            <Skeleton className="size-16 shrink-0" />
          </div>
        ))}

        <Skeleton className="relative size-16 shrink-0" />
        <Skeleton className="relative size-16 shrink-0" />
        <Skeleton className="relative size-16 shrink-0" />
        <Skeleton className="relative size-16 shrink-0" />
        <Skeleton className="relative size-16 shrink-0" />
        <Skeleton className="relative size-16 shrink-0" />
      </div>
    </div>
  )
}
