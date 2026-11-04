import { IconBrandGoogle, IconEye, IconEyeClosed, IconLogin } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup } from "@/components/ui/input-group"

export const LoginCard = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Card className="w-full max-w-sm">
      <Card.Header>
        <Card.Title>Login to your account</Card.Title>
        <Card.Description>Enter your email below to login to your account</Card.Description>
        <Card.Action>
          <Button size="sm" variant="outline">
            Sign Up
          </Button>
        </Card.Action>
      </Card.Header>
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Email</Field.Label>
            <Input placeholder="m@example.com" required type="email" />
          </Field>
          <Field>
            <Field.Label>Password</Field.Label>
            <InputGroup>
              <InputGroup.Input required type={visible ? "text" : "password"} />
              <InputGroup.Addon align="inline-end">
                <InputGroup.Button onClick={() => setVisible(!visible)}>
                  {visible ? <IconEyeClosed /> : <IconEye />}
                </InputGroup.Button>
              </InputGroup.Addon>
            </InputGroup>
          </Field>
          <a className="ml-auto inline-block text-sm underline-offset-4 hover:underline" href="#">
            Forgot your password?
          </a>
        </Field.Group>
      </Card.Content>
      <Card.Footer className="mt-auto flex-col gap-2">
        <Button className="w-full" type="submit">
          <IconLogin />
          Login
        </Button>
        <Button className="w-full" variant="outline">
          <IconBrandGoogle />
          Login with Google
        </Button>
      </Card.Footer>
    </Card>
  )
}
