import { IconChevronDown } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Collapsible } from "@/components/ui/collapsible"

export default () => {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <Card.Content>
        <Collapsible className="data-open:bg-muted rounded-md">
          <Collapsible.Trigger render={<Button className="w-full" variant="ghost" />}>
            Product details
            <IconChevronDown className="ml-auto group-data-panel-open/button:rotate-180" />
          </Collapsible.Trigger>
          <Collapsible.Content className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
            <div>This panel can be expanded or collapsed to reveal additional content.</div>
            <Button size="xs">Learn More</Button>
          </Collapsible.Content>
        </Collapsible>
      </Card.Content>
    </Card>
  )
}
