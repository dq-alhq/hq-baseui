"use client"

import { IconSearch } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { Fragment, useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Command, fuzzy } from "@/components/ui/command"
import docs from "@/components-search.json"
import { ComponentIcon } from "../icons"

const groupedItems = docs.map((doc) => ({
  label: doc.section,
  items: doc.children?.map((item) => ({
    label: item.title,
    value: item.slug
  }))
}))

export function CommandPalette() {
  const [openCommand, setOpenCommand] = useState(false)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpenCommand((prev) => !prev)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpenCommand(true)} size={"icon"} variant="outline">
        <IconSearch />
      </Button>
      <Command.Dialog
        className="sm:max-w-lg"
        filter={(item: any, q) => fuzzy(item.label, q)}
        items={groupedItems}
        onOpenChange={setOpenCommand}
        open={openCommand}
      >
        <Command.Input placeholder="Search..." />
        <Command.Empty>No results found.</Command.Empty>
        <Command.List>
          {(group) => (
            <Fragment key={group.label}>
              <Command.Group items={group.items} title={group.label}>
                {(item) => (
                  <Command.Item
                    key={item.value}
                    onClick={() => setOpenCommand(false)}
                    render={
                      item.value.startsWith("/") ? (
                        <a href={`${item.value}`} rel="noopener">
                          <ComponentIcon name={item.value.split("/").pop()} />
                          {item.label}
                        </a>
                      ) : (
                        <Link params={{ _splat: item.value }} to={"/docs/$"} />
                      )
                    }
                    value={item.value}
                  >
                    <ComponentIcon name={item.value.split("/").pop()} />
                    <span className="flex-1">{item.label}</span>
                  </Command.Item>
                )}
              </Command.Group>
              <Command.Separator />
            </Fragment>
          )}
        </Command.List>
      </Command.Dialog>
    </div>
  )
}
