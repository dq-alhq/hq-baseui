import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"

export default () => {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." type="search" />
      <Button>Search</Button>
    </ButtonGroup>
  )
}
