import { IconRefresh } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field } from "@/components/ui/field"
import { OTPField } from "@/components/ui/input-otp"

export default () => {
  return (
    <Card className="mx-auto max-w-md">
      <Card.Header>
        <Card.Title>Verify your login</Card.Title>
        <Card.Description>
          Enter the verification code we sent to your email address: <span className="font-medium">m@example.com</span>.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Field>
          <div className="flex w-full items-center justify-between">
            <Field.Label htmlFor="otp-verification">Verification code</Field.Label>
            <Button size="xs" variant="outline">
              <IconRefresh />
              Resend Code
            </Button>
          </div>
          <OTPField className="w-full justify-between *:grow" id="otp-verification" length={6} required>
            {Array.from({ length: 3 }, (_, index) => (
              <OTPField.Input aria-label={index === 0 ? undefined : `Character ${index + 1} of 6`} key={index} />
            ))}
            <OTPField.Separator />
            {Array.from({ length: 3 }, (_, index) => (
              <OTPField.Input aria-label={`Character ${index + 4} of 6`} key={index + 3} />
            ))}
          </OTPField>
          <Field.Description>
            <a href="#">I no longer have access to this email address.</a>
          </Field.Description>
        </Field>
      </Card.Content>
      <Card.Footer>
        <Field>
          <Button className="w-full" type="submit">
            Verify
          </Button>
          <div className="text-muted-foreground text-sm">
            Having trouble signing in?{" "}
            <a className="hover:text-primary underline underline-offset-4 transition-colors" href="#">
              Contact support
            </a>
          </div>
        </Field>
      </Card.Footer>
    </Card>
  )
}
