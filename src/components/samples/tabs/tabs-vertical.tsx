import { Tabs } from "@/components/ui/tabs"

export default () => {
  return (
    <Tabs defaultValue="account" orientation="vertical">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
        <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
      </Tabs.List>
    </Tabs>
  )
}
