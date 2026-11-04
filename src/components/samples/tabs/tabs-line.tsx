import { Tabs } from "@/components/ui/tabs"

export default () => {
  return (
    <Tabs defaultValue="overview">
      <Tabs.List variant="line">
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
        <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
      </Tabs.List>
    </Tabs>
  )
}
