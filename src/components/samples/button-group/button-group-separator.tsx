import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default () => {
  return (
    <ButtonGroup>
      <Button size="sm" variant="secondary">
        Copy
      </Button>
      <ButtonGroup.Separator />
      <Button size="sm" variant="secondary">
        Paste
      </Button>
    </ButtonGroup>
  )
}
