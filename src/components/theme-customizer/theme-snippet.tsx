"use client"

import type { ReactNode } from "react"
import type { ColorSpace, Preset } from "@/types/themes"
import { useState } from "react"
import { Code } from "@/components/mdx/code-client"
import { useCopyButton } from "@/hooks/use-copy"
import { copyToClipboard } from "@/lib/modifiers"
import { generateThemeCode } from "@/lib/themes/generate-theme-code"
import { CLI } from "../mdx/cli"
import { CopyButton } from "../mdx/copy-button"
import { Drawer } from "../ui/drawer"
import { Field } from "../ui/field"
import { Select } from "../ui/select"

const ThemeSnippet = ({ light, dark, children, name }: Preset & { name: string; children?: ReactNode }) => {
  const [colorFormat, setColorFormat] = useState<string>("oklch")

  const themeStyles: Preset = {
    light,
    dark
  }

  const themeCSS = generateThemeCode(themeStyles, colorFormat as ColorSpace)

  const isPresetTheme = name !== "custom"

  const [copied, onCopy] = useCopyButton(() => copyToClipboard(themeCSS))

  return (
    <Drawer showSwipeHandle swipeDirection="right">
      <Drawer.Trigger render={children as any} />
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Theme Variables</Drawer.Title>
          <Drawer.Description className="text-wrap">
            Copy these CSS variables to use your theme in other projects.
          </Drawer.Description>
        </Drawer.Header>
        <Drawer.Body>
          {isPresetTheme && <CLI className="mb-4" command="add" items={[name]} />}
          <Field>
            <Field.Label>Color</Field.Label>
            <Select name="color" onValueChange={(v) => setColorFormat(v as string)} value={colorFormat}>
              <Select.Trigger>
                <Select.Value className="uppercase" />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Item value="oklch">OKLCH</Select.Item>
                  <Select.Item value="hsl">HSL</Select.Item>
                  <Select.Item value="rgb">RGB</Select.Item>
                  <Select.Item value="hex">HEX</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select>
          </Field>
          <Code className="**:[pre]:max-h-[65vh] **:[pre]:text-[10px]!" code={themeCSS} lang="css" />
        </Drawer.Body>
        <Drawer.Footer>
          <CopyButton isCopied={copied} onClick={onCopy} size={"md"} variant={"outline"}>
            <span>Copy Theme</span>
          </CopyButton>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  )
}

export default ThemeSnippet
