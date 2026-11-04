import { Card, CardAction, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function TransferFunds() {
  return (
    <Card>
      <CardHeader className="gap-2">
        <Skeleton className="h-5 w-36 rounded-md" />
        <Skeleton className="h-4 w-64 rounded-md" />
        <CardAction>
          <Skeleton className="size-8 rounded-md" />
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-32 rounded-md" />
          <Skeleton className="h-9 w-full rounded-lg" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-24 rounded-md" />
          <Skeleton className="h-9 w-full rounded-lg" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-20 rounded-md" />
          <Skeleton className="h-9 w-full rounded-lg" />
        </div>
        <div className="bg-muted flex flex-col gap-3 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <Skeleton className="bg-muted-foreground/15 h-4 w-28 rounded-md" />
            <Skeleton className="bg-muted-foreground/15 h-4 w-24 rounded-md" />
          </div>
          <Skeleton className="bg-muted-foreground/15 h-px w-full rounded-none" />
          <div className="flex items-center justify-between">
            <Skeleton className="bg-muted-foreground/15 h-4 w-28 rounded-md" />
            <Skeleton className="bg-muted-foreground/15 h-4 w-12 rounded-md" />
          </div>
          <Skeleton className="bg-muted-foreground/15 h-px w-full rounded-none" />
          <div className="flex items-center justify-between">
            <Skeleton className="bg-muted-foreground/15 h-4 w-24 rounded-md" />
            <Skeleton className="bg-muted-foreground/15 h-4 w-20 rounded-md" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Skeleton className="h-9 w-full rounded-lg" />
      </CardFooter>
    </Card>
  )
}
