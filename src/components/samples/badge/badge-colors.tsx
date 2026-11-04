import { IconAlertTriangle, IconCircleCheck, IconInfoCircle } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"

export default function BadgeCustomColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success">
        <IconCircleCheck />
        Success
      </Badge>
      <Badge variant="warning">
        <IconAlertTriangle />
        Warning
      </Badge>
      <Badge variant="info">
        <IconInfoCircle />
        Info
      </Badge>
    </div>
  )
}
