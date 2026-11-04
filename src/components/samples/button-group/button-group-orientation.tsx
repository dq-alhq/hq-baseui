import { IconMinus, IconPlus } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default () => {
  return (
    <ButtonGroup aria-label="Media controls" className="h-fit" orientation="vertical">
      <Button size="icon" variant="outline">
        <IconPlus />
      </Button>
      <Button size="icon" variant="outline">
        <IconMinus />
      </Button>
    </ButtonGroup>
  )
}
