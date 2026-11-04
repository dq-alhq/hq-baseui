"use client"

import type { RegistryItem } from "shadcn/schema"
import { IconChevronRight, IconFolder, IconFolderOpen, IconLayoutSidebar } from "@tabler/icons-react"
import { cn } from "cn"
import { type PropsWithChildren, useEffect, useState } from "react"
import { CLI } from "@/components/mdx/cli"
import { Code } from "@/components/mdx/code-client"
import { FileIcon } from "@/components/mdx/file-icon"
import { Button } from "@/components/ui/button"
import { Tabs } from "@/components/ui/tabs"
import { Collapsible } from "../ui/collapsible"

const Folder = ({ children }: PropsWithChildren) => {
  return (
    <Collapsible.Trigger
      render={
        <Button
          className="group aria-expanded:text-foreground w-full justify-start ring-transparent! transition-none aria-expanded:bg-transparent"
          size="sm"
          variant="ghost"
        >
          <IconChevronRight className="transition-transform group-data-panel-open:rotate-90" />
          <IconFolder className="flex group-data-panel-open:hidden" />
          <IconFolderOpen className="hidden group-data-panel-open:flex" />
          {children}
        </Button>
      }
    />
  )
}

const File = ({ children, selected, onSelect }: PropsWithChildren & { selected: boolean; onSelect: () => void }) => {
  const lang = children?.toString().split(".").pop() || "tsx"
  return (
    <Button
      className="w-full justify-start ring-transparent!"
      onClick={() => !selected && onSelect()}
      size="sm"
      variant={selected ? "primary" : "ghost"}
    >
      <FileIcon className="size-4" lang={lang} />
      {children}
    </Button>
  )
}

export function ManualInstall({ component }: { component: string }) {
  const [registry, setRegistry] = useState<RegistryItem | null>(null)
  const [expanded, setExpanded] = useState<boolean>(true)
  const [selectedFile, setSelectedFile] = useState<{
    id: string
    name: string
    content: string
  }>({
    id: "",
    name: "",
    content: ""
  })
  useEffect(() => {
    fetch(`/r/${component}`)
      .then((res) => res.json())
      .then((data: RegistryItem) => {
        setRegistry(data)
        if (data?.type !== "registry:item" && data?.type !== "registry:theme") {
          const file = data.files?.[0]
          setSelectedFile({
            id: file?.path || "",
            name: file?.path.split("/").pop() || "",
            content: file?.content || ""
          })
        } else if (data?.type === "registry:item") {
          setSelectedFile({
            id: data.name,
            name: `${component}.css`,
            content: JSON.stringify(data.css, null, 2)
          })
        } else {
          setSelectedFile({
            id: data.name,
            name: `${component}.css`,
            content: JSON.stringify(data.cssVars, null, 2)
          })
        }
      })
  }, [component])

  const getCode = (name: string) => {
    if (name.includes("blocks")) {
      const file = registry?.files?.find((file) => file.path === name)
      setSelectedFile({
        id: name,
        name: file?.path.split("/").pop() || "",
        content: file?.content || ""
      })
    } else {
      fetch(`/r/${name.split("/").pop()?.split(".")[0]}`)
        .then((res) => res.json())
        .then((data: RegistryItem) => {
          const file = data.files?.[0]
          setSelectedFile({
            id: name,
            name: file?.path.split("/").pop() || "",
            content: file?.content || ""
          })
        })
    }
  }

  const showComponent =
    registry?.type === "registry:ui" ||
    registry?.type === "registry:block" ||
    registry?.type === "registry:page" ||
    registry?.type === "registry:example" ||
    registry?.type === "registry:component"

  return (
    registry && (
      <div className="grid w-full gap-2">
        {registry?.dependencies && (
          <>
            <p>First install the dependencies</p>
            <CLI command="install" items={registry?.dependencies} />
          </>
        )}
        <p>Add these files to your project</p>
        <div className="flex flex-col overflow-hidden rounded-lg border bg-transparent sm:flex-row">
          <div
            className={cn(
              "shrink-0 overflow-auto transition-[width,height]",
              expanded ? "h-64 w-full sm:h-full sm:max-h-110 sm:w-64" : "h-0 sm:w-0"
            )}
          >
            <div className="p-2">
              {registry?.type === "registry:block" && (
                <Collapsible defaultOpen>
                  <Folder>app</Folder>
                  <Collapsible.Content className="ml-5">
                    {registry.files
                      ?.filter((file) => file.type === "registry:page")
                      .map((file) => (
                        <File
                          key={file.path}
                          onSelect={() => getCode(file.path)}
                          selected={selectedFile.id === file.path}
                        >
                          {file.path.split("/").pop()}
                        </File>
                      ))}
                  </Collapsible.Content>
                </Collapsible>
              )}
              {showComponent && (
                <Collapsible defaultOpen>
                  <Folder>components</Folder>
                  <Collapsible.Content className="ml-5">
                    {registry?.registryDependencies && (
                      <Collapsible defaultOpen={registry.type === "registry:ui"}>
                        <Folder>ui</Folder>
                        <Collapsible.Content className="ml-5">
                          {registry.type === "registry:ui" && (
                            <File
                              onSelect={() => getCode(component)}
                              selected={selectedFile.id === registry.files?.[0].path || selectedFile.id === component}
                            >
                              {component}.tsx
                            </File>
                          )}
                          {registry.registryDependencies
                            .filter((f) => !f.includes("use-"))
                            .map((f) => {
                              const file = f.split("/").pop()?.replace(".tsx", "") ?? ""
                              return (
                                <File key={file} onSelect={() => getCode(file)} selected={selectedFile.id === file}>
                                  {file}.tsx
                                </File>
                              )
                            })}
                        </Collapsible.Content>
                      </Collapsible>
                    )}
                  </Collapsible.Content>
                  {registry?.type === "registry:block" && (
                    <Collapsible defaultOpen={registry.type === "registry:block"}>
                      <Folder>block-components</Folder>
                      <Collapsible.Content className="ml-5">
                        {registry?.files
                          ?.filter((file) => file.type !== "registry:page")
                          .map((file) => (
                            <File
                              key={file.path}
                              onSelect={() => getCode(file.path)}
                              selected={selectedFile.id === file.path}
                            >
                              {file.path.split("/").pop()}
                            </File>
                          ))}
                      </Collapsible.Content>
                    </Collapsible>
                  )}
                </Collapsible>
              )}
              {registry?.registryDependencies?.join().includes("use-") && (
                <Collapsible defaultOpen={registry.type === "registry:hook"}>
                  <Folder>hooks</Folder>
                  <Collapsible.Content className="ml-5">
                    {registry.registryDependencies
                      .filter((c) => c.includes("use-"))
                      .map((file) => (
                        <File key={file} onSelect={() => getCode(file)} selected={selectedFile.id === file}>
                          {file.split("/").pop()}.ts
                        </File>
                      ))}
                  </Collapsible.Content>
                </Collapsible>
              )}
              {registry.type === "registry:item" && (
                <File onSelect={() => getCode(`${component}.css`)} selected={selectedFile.name === `${component}.css`}>
                  {component}.css
                </File>
              )}
            </div>
          </div>
          <div
            className={cn(
              "relative isolate flex min-w-lg flex-1 flex-col overflow-x-auto overflow-y-hidden **:my-0",
              expanded && "border-l"
            )}
          >
            <button
              aria-label="Toggle Sidebar"
              className={cn(
                "absolute inset-x-0 z-40 h-1 w-full transition-all ease-linear sm:inset-y-0 sm:h-full sm:w-1",
                "hover:bg-primary after:top-full sm:after:top-auto sm:after:left-full",
                expanded ? "cursor-n-resize sm:cursor-w-resize" : "cursor-s-resize sm:cursor-e-resize"
              )}
              onClick={() => setExpanded(!expanded)}
              title="Toggle Sidebar"
              type="button"
            />
            <div className="bg-muted flex h-10! items-center gap-2 border-b p-2">
              <Button onClick={() => setExpanded(!expanded)} size="icon-xs" variant="outline">
                <IconLayoutSidebar className="rotate-90 sm:rotate-0" />
              </Button>
              <FileIcon className="size-4" lang={selectedFile?.name.split(".").pop() || "tsx"} />
              <span>{selectedFile?.name}</span>
            </div>
            <Code
              className="flex-1 **:border-transparent **:not-[button]:rounded-none **:[pre]:min-h-100"
              code={selectedFile?.content.replaceAll(`blocks/${component}/components`, "block-components")}
              copy
            />
          </div>
        </div>
      </div>
    )
  )
}

export function Install({ component }: { component: string }) {
  return (
    <Tabs defaultValue={"cli"}>
      <Tabs.List variant={"fill"}>
        <Tabs.Trigger value="cli">CLI</Tabs.Trigger>
        <Tabs.Trigger value="manual">Manual</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Contents>
        <Tabs.Content value="cli">
          <CLI command="add" items={component} />
        </Tabs.Content>
        <Tabs.Content value="manual">
          <ManualInstall component={component} />
        </Tabs.Content>
      </Tabs.Contents>
    </Tabs>
  )
}
