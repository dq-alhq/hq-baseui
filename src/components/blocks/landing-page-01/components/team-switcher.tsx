"use client"

import type { Team } from "./data"
import { IconCircle, IconPlus, IconSelector } from "@tabler/icons-react"
import { useState } from "react"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Navbar } from "@/components/ui/navbar"

export function TeamSwitcher({ teams }: { teams: Team[] }) {
  const [activeTeam, setActiveTeam] = useState(teams[0])

  if (!activeTeam) {
    return null
  }

  return (
    <Navbar.Menu>
      <Navbar.MenuItem>
        <DropdownMenu>
          <DropdownMenu.Trigger
            render={
              <Navbar.MenuButton size="lg">
                <div className="bg-sidebar text-sidebar-foreground border-sidebar-border flex aspect-square size-8 items-center justify-center rounded-lg border">
                  {activeTeam.logo ? <activeTeam.logo className="size-4" /> : <IconCircle className="size-4" />}
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="font-medium whitespace-nowrap">{activeTeam.name}</span>
                  <span className="text-xs whitespace-nowrap">{activeTeam.plan}</span>
                </div>
                <IconSelector className="ml-auto" />
              </Navbar.MenuButton>
            }
          />
          <DropdownMenu.Content className="min-w-56">
            <DropdownMenu.Group>
              <DropdownMenu.Label className="text-muted-foreground text-xs">Teams</DropdownMenu.Label>
            </DropdownMenu.Group>
            <DropdownMenu.RadioGroup onValueChange={setActiveTeam} value={activeTeam}>
              {teams.map((team, index) => (
                <DropdownMenu.RadioItem
                  className="gap-2 p-2 **:data-[slot=dropdown-menu-radio-item-indicator]:hidden"
                  key={team.name}
                  value={team}
                >
                  <div className="flex size-6 items-center justify-center rounded-md border">
                    {team.logo ? (
                      <team.logo className="size-3.5 shrink-0" />
                    ) : (
                      <IconCircle className="size-3.5 shrink-0" />
                    )}
                  </div>
                  {team.name}
                  <DropdownMenu.Shortcut>⌘{index + 1}</DropdownMenu.Shortcut>
                </DropdownMenu.RadioItem>
              ))}
            </DropdownMenu.RadioGroup>
            <DropdownMenu.Separator />
            <DropdownMenu.Item className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <IconPlus className="size-4" />
              </div>
              <div className="text-muted-foreground font-medium">Add team</div>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </Navbar.MenuItem>
    </Navbar.Menu>
  )
}
