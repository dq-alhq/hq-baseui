import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ToggleGroup } from "@/components/ui/toggle"

const spacingOptions = [
  {
    className: "[--card-spacing:--spacing(4)]",
    label: "16px",
    value: "4"
  },
  {
    className: "[--card-spacing:--spacing(5)]",
    label: "20px",
    value: "5"
  },
  {
    className: "[--card-spacing:--spacing(6)]",
    label: "24px",
    value: "6"
  },
  {
    className: "[--card-spacing:--spacing(8)]",
    label: "32px",
    value: "8"
  }
]

export default () => {
  const [spacing, setSpacing] = useState("4")
  const selectedSpacing = spacingOptions.find((option) => option.value === spacing)

  return (
    <div className="mx-auto grid w-full max-w-sm gap-4">
      <ToggleGroup
        className="justify-center"
        onValueChange={(value) => {
          if (value[0]) {
            setSpacing(value[0])
          }
        }}
        size="sm"
        value={[spacing]}
        variant="outline"
      >
        {spacingOptions.map((option) => (
          <ToggleGroup.Item key={option.value} value={option.value}>
            {option.label}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup>
      <Card className={selectedSpacing?.className}>
        <Card.Header>
          <Card.Title>Login to your account</Card.Title>
          <Card.Description>Enter your email below to login to your account</Card.Description>
          <Card.Action>
            <Button variant="link">Sign Up</Button>
          </Card.Action>
        </Card.Header>
        <Card.Content>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email-spacing">Email</Label>
                <Input id="email-spacing" placeholder="m@example.com" required type="email" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password-spacing">Password</Label>
                  <a className="ml-auto inline-block text-sm underline-offset-4 hover:underline" href="#">
                    Forgot your password?
                  </a>
                </div>
                <Input id="password-spacing" required type="password" />
              </div>
            </div>
          </form>
        </Card.Content>
        <Card.Footer className="flex-col gap-2">
          <Button className="w-full" type="submit">
            Login
          </Button>
          <Button className="w-full" variant="outline">
            Login with Google
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
}
