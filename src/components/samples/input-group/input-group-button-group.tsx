import { IconLink } from "@tabler/icons-react"
import { ButtonGroup } from "@/components/ui/button-group"
import { InputGroup } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"

export default () => {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <ButtonGroup>
        <ButtonGroup.Text render={<Label htmlFor="url" />}>https://</ButtonGroup.Text>
        <InputGroup>
          <InputGroup.Input id="url" />
          <InputGroup.Addon align="inline-end">
            <IconLink />
          </InputGroup.Addon>
        </InputGroup>
        <ButtonGroup.Text>.com</ButtonGroup.Text>
      </ButtonGroup>
    </div>
  )
}
