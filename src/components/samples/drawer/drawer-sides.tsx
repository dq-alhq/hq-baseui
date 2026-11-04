import { Button } from "@/components/ui/button"
import { Drawer } from "@/components/ui/drawer"

export default () => {
  return (
    <Drawer swipeDirection="left">
      <Drawer.Trigger render={<Button variant="secondary" />}>Open Left Drawer</Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Move Goal</Drawer.Title>
          <Drawer.Description>Set your daily activity goal.</Drawer.Description>
        </Drawer.Header>
        <div className="flex-1 p-4">
          <div className="bg-muted size-full rounded-2xl" />
        </div>
        <Drawer.Footer>
          <Drawer.Close render={<Button />}>Close</Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  )
}
