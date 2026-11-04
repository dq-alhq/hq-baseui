import fs from "node:fs"
import path from "node:path"
import { siteConfig } from "#/config/site"

interface RegistryItemProps {
  dependencies?: string[]
  files?: {
    path?: string
    content?: string
  }[]
}

const REGISTRY_DIR = path.join(process.cwd(), "public", "r")

const DEMO_REGEX = /<Demo[\s\S]*?component=(?:"([^"]+)"|'([^']+)')[\s\S]*?\/>/g
const INSTALL_REGEX = /<Install[\s\S]*?component=(?:"([^"]+)"|'([^']+)')[\s\S]*?\/>/g

export function processMdxForLLMs(content: string) {
  let output = content

  output = output.replace(DEMO_REGEX, (match, a?: string, b?: string) => {
    return embedRegistryCode(match, extractRegistryId((a ?? b ?? "").trim()))
  })

  output = output.replace(INSTALL_REGEX, (match, a?: string, b?: string) => {
    const component = (a ?? b ?? "").trim()
    const cmd = `${siteConfig.shadcn} add ${siteConfig.url}/r/`
    const manualInstall = embedRegistryCode(match, extractRegistryId(component).trim())
    return component
      ? `\nAdd the component with the CLI.\n\n\`\`\`bash\n${cmd}${component}\n\`\`\`\n\n## Manual Installation\n\n${getComponentDeps(component)}${manualInstall}`
      : match
  })
  return output
}

function embedRegistryCode(fallback: string, raw: string) {
  if (!raw) return fallback
  const item = readRegistryItem(raw)
  if (!item) return fallback
  const md = toMarkdownCodeBlocks(item)
  return md || fallback
}

function getComponentDeps(raw: string) {
  if (!raw) return ""
  const item = readRegistryItem(raw)
  if (!item) return ""
  const deps = item.dependencies?.filter((f) => typeof f === "string" && f.trim()) ?? []
  return deps ? `\`\`\`bash\nnpm i ${deps.join(" ")}\n\`\`\`` : ""
}

function extractRegistryId(input: string) {
  const value = input.trim().replace(/^\/+|\/+$/g, "")
  const parts = value.split("/").filter(Boolean)
  return parts.at(-1) ?? value
}

function readRegistryItem(id: string): RegistryItemProps | null {
  const filePath = path.join(REGISTRY_DIR, `${id}.json`)
  if (!fs.existsSync(filePath)) return null
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as RegistryItemProps
}

function toMarkdownCodeBlocks(item: RegistryItemProps) {
  const files = item.files?.filter((f) => typeof f.content === "string" && f.content.trim()) ?? []
  if (!files.length) return ""

  return files
    .map((file) => {
      const code = (file.content ?? "").replaceAll(
        "export default",
        `export const ${file.path
          ?.split("/")
          .pop()
          ?.replace(".tsx", "")
          .replace(/(^\w|-\w)/g, (match) => match.replace("-", "").toUpperCase())} =`
      )
      const lang = codeLangFromPath(file.path)
      const header = file.path ? `\n\n**${file.path}**\n\n` : "\n\n"
      return `${header}\`\`\`${lang}\n${code}\n\`\`\``
    })
    .join("\n\n")
}

function codeLangFromPath(p?: string) {
  if (!p) return "txt"
  if (p.endsWith(".tsx") || p.endsWith(".ts")) return "tsx"
  if (p.endsWith(".css")) return "css"
  if (p.endsWith(".json")) return "json"
  if (p.endsWith(".md") || p.endsWith(".mdx")) return "md"
  if (p.endsWith(".php")) return "php"
  return "txt"
}
