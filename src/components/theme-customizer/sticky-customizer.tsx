import { IconChevronDown } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "../ui/button"
import Customizer from "./customizer"
import { FontMonoSelector, FontSansSelector } from "./font-selector"

export const StickyCustomizer = () => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div className="to-background fixed inset-x-0 bottom-0 z-50 bg-linear-to-b from-transparent pt-24">
      <div className="flex w-full justify-center">
        <Button
          className={"rounded-b-none border-b-0"}
          onClick={() => setIsVisible(!isVisible)}
          size={"sm"}
          variant={"outline"}
        >
          <IconChevronDown className={`transition ${isVisible ? "rotate-180" : "rotate-0"}`} />
          {isVisible ? "Hide" : "Show"}
        </Button>
      </div>
      <div
        className="bg-popover text-popover-foreground overflow-auto rounded-lg border shadow-sm transition-[height]"
        style={{ height: isVisible ? "96px" : 0 }}
      >
        <div className="grid grid-cols-2 gap-2 p-4">
          <FontSansSelector />
          <FontMonoSelector />
          <Customizer />
        </div>
      </div>
    </div>
  )
}
