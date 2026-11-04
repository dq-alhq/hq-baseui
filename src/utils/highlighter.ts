import { createHighlighter } from "@tanstack/highlight/core"
import { js } from "@tanstack/highlight/languages/js"
import { json } from "@tanstack/highlight/languages/json"
import { plaintext } from "@tanstack/highlight/languages/plaintext"
import { ts } from "@tanstack/highlight/languages/ts"
import { tsx } from "@tanstack/highlight/languages/tsx"

export const highlighter = createHighlighter({
  languages: [plaintext, js, ts, tsx, json]
})
