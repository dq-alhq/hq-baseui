import { IconBold, IconItalic, IconUnderline } from "@tabler/icons-react"
import { ToggleGroup } from "@/components/ui/toggle"

export default () => {
  return (
    <ToggleGroup defaultValue={["bold", "italic"]} multiple orientation="vertical" spacing={1}>
      <ToggleGroup.Item aria-label="Toggle bold" value="bold">
        <IconBold />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle italic" value="italic">
        <IconItalic />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle underline" value="underline">
        <IconUnderline />
      </ToggleGroup.Item>
    </ToggleGroup>
  )
}
