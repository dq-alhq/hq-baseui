import { IconShield } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Item } from "@/components/ui/item"

export default () => {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <Item.Media variant="icon">
          <IconShield />
        </Item.Media>
        <Item.Content>
          <Item.Title>Security Alert</Item.Title>
          <Item.Description>New login detected from unknown device.</Item.Description>
        </Item.Content>
        <Item.Actions>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </Item.Actions>
      </Item>
    </div>
  )
}
