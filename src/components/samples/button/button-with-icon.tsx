import { IconBrandReact } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"

export default () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>
        <IconBrandReact /> Inline Start
      </Button>
      <Button>
        Inline End
        <IconBrandReact />
      </Button>
    </div>
  )
}
