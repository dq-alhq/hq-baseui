import { IconItalic } from "@tabler/icons-react"
import { Toggle } from "@/components/ui/toggle"

export default () => {
  return (
    <Toggle aria-label="Toggle italic">
      <IconItalic />
      Italic
    </Toggle>
  )
}
