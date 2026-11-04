import { IconChevronRight, IconShieldCheck } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Item } from "@/components/ui/item"

export default () => {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <Item.Content>
          <Item.Title>Basic Item</Item.Title>
          <Item.Description>A simple item with title and description.</Item.Description>
        </Item.Content>
        <Item.Actions>
          <Button size="sm" variant="outline">
            Action
          </Button>
        </Item.Actions>
      </Item>
      <Item render={<a href="#" />} size="sm" variant="outline">
        <Item.Media>
          <IconShieldCheck className="size-5" />
        </Item.Media>
        <Item.Content>
          <Item.Title>Your profile has been verified.</Item.Title>
        </Item.Content>
        <Item.Actions>
          <IconChevronRight className="size-4" />
        </Item.Actions>
      </Item>
    </div>
  )
}
