import { IconBold, IconItalic, IconUnderline } from "@tabler/icons-react"
import { ToggleGroup } from "@/components/ui/toggle"

export default () => {
  return (
    <ToggleGroup disabled>
      <ToggleGroup.Item aria-label="Toggle bold" value="bold">
        <IconBold />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle italic" value="italic">
        <IconItalic />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle strikethrough" value="strikethrough">
        <IconUnderline />
      </ToggleGroup.Item>
    </ToggleGroup>
  )
}
