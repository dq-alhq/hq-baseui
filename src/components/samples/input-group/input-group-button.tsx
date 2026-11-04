"use client"

import { IconCheck, IconCopy, IconInfoCircle, IconStar } from "@tabler/icons-react"
import { useState } from "react"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { Popover } from "@/components/ui/popover"
import { toast } from "@/components/ui/toast"
import { useCopyButton } from "@/hooks/use-copy"

export default () => {
  const [isCopied, copy] = useCopyButton(() => toast.add({ description: "https://x.com/shadcn" }))
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroup.Input placeholder="https://x.com/shadcn" readOnly />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button aria-label="Copy" onClick={copy} size="icon-xs" title="Copy">
            {isCopied ? <IconCheck /> : <IconCopy />}
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup className="[--radius:9999px]">
        <Popover>
          <Popover.Trigger render={<InputGroupAddon />}>
            <InputGroupButton size="icon-xs" variant="secondary">
              <IconInfoCircle />
            </InputGroupButton>
          </Popover.Trigger>
          <Popover.Content align="start" className="flex flex-col gap-1 rounded-xl text-sm">
            <p className="font-medium">Your connection is not secure.</p>
            <p>You should not enter any sensitive information on this site.</p>
          </Popover.Content>
        </Popover>
        <InputGroupAddon className="text-muted-foreground pl-1.5">https://</InputGroupAddon>
        <InputGroupInput id="input-secure-19" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton onClick={() => setIsFavorite(!isFavorite)} size="icon-xs">
            <IconStar
              className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
              data-favorite={isFavorite}
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Type to search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
