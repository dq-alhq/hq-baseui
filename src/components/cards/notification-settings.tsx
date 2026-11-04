import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"

const NOTIFICATIONS = [
  {
    id: "transactions",
    label: "Transaction alerts",
    description: "Deposits, withdrawals, and transfers.",
    defaultChecked: true
  },
  {
    id: "security",
    label: "Security alerts",
    description: "Login attempts and account changes.",
    defaultChecked: true
  },
  {
    id: "goals",
    label: "Goal milestones",
    description: "Updates at 25%, 50%, 75%, and 100%.",
    defaultChecked: false
  },
  {
    id: "market",
    label: "Market updates",
    description: "Daily portfolio summary and price alerts.",
    defaultChecked: false
  }
]

export function NotificationSettings() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Notifications</Card.Title>
        <Card.Description>Choose which email and push alerts you want to receive.</Card.Description>
      </Card.Header>
      <Card.Content>
        <Field.Group>
          {NOTIFICATIONS.map((n) => (
            <Field key={n.id}>
              <Checkbox defaultChecked={n.defaultChecked} />
              <Field.Label>{n.label}</Field.Label>
              <Field.Description>{n.description}</Field.Description>
            </Field>
          ))}
        </Field.Group>
      </Card.Content>
      <Card.Footer>
        <Button className="w-full">Save Preferences</Button>
      </Card.Footer>
    </Card>
  )
}
