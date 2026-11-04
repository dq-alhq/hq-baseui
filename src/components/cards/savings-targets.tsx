import { Card } from "@/components/ui/card"
import { Item } from "@/components/ui/item"
import { Progress } from "@/components/ui/progress"

export function SavingsTargets() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Savings Targets</Card.Title>
        <Card.Description>
          Active milestones for 2024 across your portfolio. Monitor how close you are to each savings goal.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Item.Group className="gap-3">
          <Item className="flex-col items-stretch" role="listitem" variant="muted">
            <Item.Content className="gap-3">
              <Item.Description className="cn-font-heading text-muted-foreground text-xs font-medium tracking-wider uppercase">
                Retirement
              </Item.Description>
              <span className="text-3xl font-semibold tabular-nums">$420,000</span>
              <Progress aria-label="Retirement savings progress" value={65} />
            </Item.Content>
            <Item.Footer>
              <span className="text-muted-foreground text-sm">65% achieved</span>
              <span className="text-sm font-medium tabular-nums">$273,000</span>
            </Item.Footer>
          </Item>
          <Item className="flex-col items-stretch" role="listitem" variant="muted">
            <Item.Content className="gap-3">
              <Item.Description className="cn-font-heading text-muted-foreground text-xs font-medium tracking-wider uppercase">
                Real Estate
              </Item.Description>
              <span className="text-3xl font-semibold tabular-nums">$85,000</span>
              <Progress aria-label="Real estate savings progress" value={32} />
            </Item.Content>
            <Item.Footer>
              <span className="text-muted-foreground text-sm">32% achieved</span>
              <span className="text-sm font-medium tabular-nums">$27,200</span>
            </Item.Footer>
          </Item>
        </Item.Group>
      </Card.Content>
      <Card.Footer>
        <Card.Description className="text-center">You have not met your targets for this year.</Card.Description>
      </Card.Footer>
    </Card>
  )
}
