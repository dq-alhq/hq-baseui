import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function NewMilestone() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Set a new milestone</Card.Title>
        <Card.Description>Define your financial target and we&apos;ll help you pace your savings.</Card.Description>
      </Card.Header>
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Goal Name</Field.Label>
            <Input placeholder="e.g. New Car, Home Downpayment" />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <Field.Label>Target Amount</Field.Label>
              <Input defaultValue="$15,000" />
            </Field>
            <Field>
              <Field.Label>Target Date</Field.Label>
              <Input defaultValue="Dec 2025" />
            </Field>
          </div>
        </Field.Group>
      </Card.Content>
      <Card.Footer className="flex-col gap-2">
        <Button className="w-full">Create Goal</Button>
        <Button className="w-full" variant="outline">
          Cancel
        </Button>
      </Card.Footer>
    </Card>
  )
}
