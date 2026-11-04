"use client"

import type { ReactNode } from "react"
import type { ColorSpace, Preset } from "@/types/themes"
import { useState } from "react"
import { Code } from "@/components/mdx/code-client"
import { Dialog } from "@/components/ui/dialog"
import { useCopyButton } from "@/hooks/use-copy"
import { copyToClipboard } from "@/lib/modifiers"
import { generateThemeCode } from "@/lib/themes/generate-theme-code"
import { CopyButton } from "../mdx/copy-button"
import { Label } from "../ui/label"
import { Select } from "../ui/select"

const ThemeSnippet = ({ light, dark, children }: Preset & { name: string; children?: ReactNode }) => {
  const [colorFormat, setColorFormat] = useState<string>("oklch")

  const themeStyles: Preset = {
    light,
    dark
  }

  const themeCSS = generateThemeCode(themeStyles, colorFormat as ColorSpace)

  // const isPresetTheme = name !== 'custom'

  const [copied, onCopy] = useCopyButton(() => copyToClipboard(themeCSS))

  return (
    <Dialog>
      {children}
      <Dialog.Content className="sm:max-w-195">
        <Dialog.Header>
          <Dialog.Title>Theme Variables</Dialog.Title>
          <Dialog.Description>Copy these CSS variables to use your theme in other projects.</Dialog.Description>
        </Dialog.Header>
        <Dialog.Body>
          {/* {isPresetTheme && <CLI command='add' items={[name]} />} */}
          <Code className="border shadow-sm" code={themeCSS} lang="css" />
        </Dialog.Body>
        <Dialog.Footer>
          <Select
            aria-label="Color"
            name="color"
            onValueChange={(v) => setColorFormat(v as string)}
            value={colorFormat}
          >
            <Label>Color</Label>
            <Select.Trigger className="bg-background">
              <Select.Value />
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
          <CopyButton isCopied={copied} onClick={onCopy} size={"md"} variant={"outline"}>
            Copy Theme
          </CopyButton>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  )
}

export default ThemeSnippet
