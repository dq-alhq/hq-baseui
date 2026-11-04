import { IconInbox } from "@tabler/icons-react"
import { Item } from "@/components/ui/item"

export default () => {
  return (
    <Item.Group>
      <Item variant="outline">
        <Item.Media variant="icon">
          <IconInbox />
        </Item.Media>
        <Item.Content>
          <Item.Title>Item 1</Item.Title>
          <Item.Description>First item with icon.</Item.Description>
        </Item.Content>
      </Item>
      <Item variant="outline">
        <Item.Media variant="icon">
          <IconInbox />
        </Item.Media>
        <Item.Content>
          <Item.Title>Item 2</Item.Title>
          <Item.Description>Second item with icon.</Item.Description>
        </Item.Content>
      </Item>
      <Item variant="outline">
        <Item.Media variant="icon">
          <IconInbox />
        </Item.Media>
        <Item.Content>
          <Item.Title>Item 3</Item.Title>
          <Item.Description>Third item with icon.</Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}
