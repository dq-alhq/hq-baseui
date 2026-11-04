import { Toggle } from "@/components/ui/toggle"

export default () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="Toggle disabled" disabled>
        Disabled
      </Toggle>
      <Toggle aria-label="Toggle disabled outline" disabled variant="outline">
        Disabled
      </Toggle>
    </div>
  )
}
