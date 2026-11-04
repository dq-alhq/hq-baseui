import { Card } from "@/components/ui/card"
import { Tabs } from "@/components/ui/tabs"

export default () => {
  return (
    <Tabs className="w-100" defaultValue="overview">
      <Tabs.List className="w-full">
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
        <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Contents className="bg-card h-42 rounded-lg">
        <Tabs.Content value="overview">
          <Card className="w-full bg-transparent ring-0">
            <Card.Header>
              <Card.Title>Overview</Card.Title>
              <Card.Description>
                View your key metrics and recent project activity. Track progress across all your active projects.
              </Card.Description>
            </Card.Header>
            <Card.Content className="text-muted-foreground text-sm">
              You have 12 active projects and 3 pending tasks.
            </Card.Content>
          </Card>
        </Tabs.Content>
        <Tabs.Content value="analytics">
          <Card className="w-full bg-transparent ring-0">
            <Card.Header>
              <Card.Title>Analytics</Card.Title>
              <Card.Description>
                Track performance and user engagement metrics. Monitor trends and identify growth opportunities.
              </Card.Description>
            </Card.Header>
            <Card.Content className="text-muted-foreground text-sm">
              Page views are up 25% compared to last month.
            </Card.Content>
          </Card>
        </Tabs.Content>
        <Tabs.Content value="reports">
          <Card className="w-full bg-transparent ring-0">
            <Card.Header>
              <Card.Title>Reports</Card.Title>
              <Card.Description>
                Generate and download your detailed reports. Export data in multiple formats for analysis.
              </Card.Description>
            </Card.Header>
            <Card.Content className="text-muted-foreground text-sm">
              You have 5 reports ready and available to export.
            </Card.Content>
          </Card>
        </Tabs.Content>
        <Tabs.Content value="settings">
          <Card className="w-full bg-transparent ring-0">
            <Card.Header>
              <Card.Title>Settings</Card.Title>
              <Card.Description>
                Manage your account preferences and options. Customize your experience to fit your needs.
              </Card.Description>
            </Card.Header>
            <Card.Content className="text-muted-foreground text-sm">
              Configure notifications, security, and themes.
            </Card.Content>
          </Card>
        </Tabs.Content>
      </Tabs.Contents>
    </Tabs>
  )
}
