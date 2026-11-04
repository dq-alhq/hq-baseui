import { IconBold, IconItalic } from "@tabler/icons-react"
import { Toggle } from "@/components/ui/toggle"

export default () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="Toggle italic" variant="outline">
        <IconItalic />
        Italic
      </Toggle>
      <Toggle aria-label="Toggle bold" variant="outline">
        <IconBold />
        Bold
      </Toggle>
    </div>
  )
}
