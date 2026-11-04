import { IconPlus } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default () => {
  return (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroup.Separator />
      <Button size="icon" variant="secondary">
        <IconPlus />
      </Button>
    </ButtonGroup>
  )
}
