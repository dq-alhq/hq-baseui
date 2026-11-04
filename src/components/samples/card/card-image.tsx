import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default () => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        src="https://avatar.vercel.sh/shadcn1"
      />
      <Card.Header>
        <Card.Action>
          <Badge variant="secondary">Featured</Badge>
        </Card.Action>
        <Card.Title>Design systems meetup</Card.Title>
        <Card.Description>A practical talk on component APIs, accessibility, and shipping faster.</Card.Description>
      </Card.Header>
      <Card.Footer>
        <Button className="w-full">View Event</Button>
      </Card.Footer>
    </Card>
  )
}
