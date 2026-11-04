import { IconArrowUp } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"

export default () => {
  return (
    <div className="flex gap-2">
      <Button className="rounded-full">Get Started</Button>
      <Button className="rounded-full" size="icon" variant="outline">
        <IconArrowUp />
      </Button>
    </div>
  )
}
