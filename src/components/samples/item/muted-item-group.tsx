import { Button } from "@/components/ui/button"
import { Item } from "@/components/ui/item"

export default () => {
  return (
    <Item.Group>
      <Item variant="muted">
        <Item.Content>
          <Item.Title>Item 1</Item.Title>
          <Item.Description>First item in muted group.</Item.Description>
        </Item.Content>
        <Item.Actions>
          <Button size="sm" variant="outline">
            Action
          </Button>
        </Item.Actions>
      </Item>
      <Item variant="muted">
        <Item.Content>
          <Item.Title>Item 2</Item.Title>
          <Item.Description>Second item in muted group.</Item.Description>
        </Item.Content>
        <Item.Actions>
          <Button size="sm" variant="outline">
            Action
          </Button>
        </Item.Actions>
      </Item>
      <Item variant="muted">
        <Item.Content>
          <Item.Title>Item 3</Item.Title>
          <Item.Description>Third item in muted group.</Item.Description>
        </Item.Content>
        <Item.Actions>
          <Button size="sm" variant="outline">
            Action
          </Button>
        </Item.Actions>
      </Item>
    </Item.Group>
  )
}
