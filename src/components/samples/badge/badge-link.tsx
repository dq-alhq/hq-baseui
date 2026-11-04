import { IconExternalLink } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"

export default function BadgeAsLink() {
  return (
    <Badge render={<a href="#link" />}>
      Open Link <IconExternalLink />
    </Badge>
  )
}
