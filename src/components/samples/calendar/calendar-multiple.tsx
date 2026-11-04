import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"

export default () => {
  return (
    <Card className="mx-auto w-fit p-0">
      <Card.Content className="p-0">
        <Calendar mode="multiple" />
      </Card.Content>
    </Card>
  )
}
