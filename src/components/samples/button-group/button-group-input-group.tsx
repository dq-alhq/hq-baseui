"use client"

import { IconPlus, IconWaveform } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { InputGroup } from "@/components/ui/input-group"
import { Tooltip } from "@/components/ui/tooltip"

export default () => {
  const [voiceEnabled, setVoiceEnabled] = useState(false)

  return (
    <ButtonGroup className="[--radius:9999rem]">
      <ButtonGroup>
        <Button size="icon" variant="outline">
          <IconPlus />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroup.Input
            disabled={voiceEnabled}
            placeholder={voiceEnabled ? "Record and send audio..." : "Send a message..."}
          />
          <InputGroup.Addon align="inline-end">
            <Tooltip>
              <Tooltip.Trigger
                render={
                  <InputGroup.Button
                    aria-pressed={voiceEnabled}
                    className="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                    data-active={voiceEnabled}
                    onClick={() => setVoiceEnabled(!voiceEnabled)}
                    size="icon-xs"
                  />
                }
              >
                <IconWaveform />
              </Tooltip.Trigger>
              <Tooltip.Content>Voice Mode</Tooltip.Content>
            </Tooltip>
          </InputGroup.Addon>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  )
}
