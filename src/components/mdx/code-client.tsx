import { createHighlightedCodeBlockProps } from "@tanstack/highlight/react"
import { createThemeCss } from "@tanstack/highlight/theme"
import { githubDarkTheme } from "@tanstack/highlight/themes/github-dark"
import { githubLightTheme } from "@tanstack/highlight/themes/github-light"
import { cn } from "cn"
import { useState } from "react"
import { highlighter } from "@/utils/highlighter"
import { copyToClipboard } from "@/utils/modifiers"
import { CopyButton } from "./copy-button"

const themeCss = createThemeCss({
  light: githubLightTheme,
  dark: githubDarkTheme,
  darkSelector: ".dark"
})

export interface CodeClientProps {
  lang?: string
  code: string
  className?: string
  copy?: boolean
}

export const Code = ({ code, lang = "tsx", className, copy = false }: CodeClientProps) => {
  const [copied, setCopied] = useState(false)

  const content = createHighlightedCodeBlockProps({
    highlighter,
    code,
    lang,
    className: "code-block",
    lineNumbers: true
  })

  const copyCode = async () => {
    await copyToClipboard(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <figure className={cn(className, "relative")}>
      <style>{themeCss}</style>
      <figcaption>
        {copy && <CopyButton className="absolute top-1 right-1 z-10" isCopied={copied} onClick={copyCode} />}
      </figcaption>
      <div
        className={cn(
          "relative my-4 w-full max-w-none overflow-hidden rounded-lg text-sm/6",
          "border shadow-sm",
          "**:[pre]:box-border **:[pre]:max-h-96 **:[pre]:overflow-auto **:[pre]:p-2"
        )}
        dangerouslySetInnerHTML={{ __html: content.htmlMarkup }}
      />
    </figure>
  )
}
