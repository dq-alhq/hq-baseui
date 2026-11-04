import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

export default function BadgeWithSpinner() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="destructive">
        <Spinner />
        Deleting
      </Badge>
      <Badge variant="secondary">
        Generating
        <Spinner />
      </Badge>
    </div>
  )
}
