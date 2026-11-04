import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"

export default () => {
  return (
    <Button variant="outline">
      Accept{" "}
      <Kbd className="translate-x-0.5" data-icon="inline-end">
        ⏎
      </Kbd>
    </Button>
  )
}
