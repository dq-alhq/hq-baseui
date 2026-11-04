import { IconBrandReact } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">Button</Button>
      <Button aria-label="Submit" size="icon" variant="outline">
        <IconBrandReact />
      </Button>
    </div>
  )
}
