import { Tabs } from "@/components/ui/tabs"

export default () => {
  return (
    <Tabs defaultValue="home">
      <Tabs.List>
        <Tabs.Trigger value="home">Home</Tabs.Trigger>
        <Tabs.Trigger disabled value="settings">
          Disabled
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs>
  )
}
