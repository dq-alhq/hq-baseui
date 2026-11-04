import { IconExternalLink, IconMail } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"

export default () => {
  return (
    <Card className="w-full">
      <Card.Header>
        <Card.Title>Card with Input Group</Card.Title>
        <Card.Description>This is a card with an input group.</Card.Description>
      </Card.Header>
      <Card.Content>
        <Field.Set>
          <Field>
            <Field.Label htmlFor="email-input">Email Address</Field.Label>
            <InputGroup>
              <InputGroup.Input id="email-input" placeholder="you@example.com" type="email" />
              <InputGroup.Addon align="inline-end">
                <IconMail />
              </InputGroup.Addon>
            </InputGroup>
          </Field>
          <Field>
            <Field.Label htmlFor="website-input">Website URL</Field.Label>
            <InputGroup>
              <InputGroup.Addon>
                <InputGroup.Text>https://</InputGroup.Text>
              </InputGroup.Addon>
              <InputGroup.Input id="website-input" placeholder="example.com" />
              <InputGroup.Addon align="inline-end">
                <IconExternalLink />
              </InputGroup.Addon>
            </InputGroup>
          </Field>
          <Field>
            <Field.Label htmlFor="feedback-textarea">Feedback & Comments</Field.Label>
            <InputGroup>
              <InputGroup.Textarea className="min-h-25" id="feedback-textarea" placeholder="Share your thoughts..." />
              <InputGroup.Addon align="block-end">
                <InputGroup.Text>0/500 characters</InputGroup.Text>
              </InputGroup.Addon>
            </InputGroup>
          </Field>
        </Field.Set>
      </Card.Content>
      <Card.Footer className="justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </Card.Footer>
    </Card>
  )
}
