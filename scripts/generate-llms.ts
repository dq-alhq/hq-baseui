import { promises as fs } from "node:fs"
import path from "node:path"
import { siteConfig } from "@/config/site"

export interface Item {
  title: string
  slug: string
  description: string
  order: number
}

export interface Component {
  section: string
  children: {
    subsection: string
    children: Item[]
  }[]
}

const sectionOrder = ["getting-started", "components", "utils"]

async function getFrontmatter(filePath: string): Promise<{ title: string; description: string; order: number }> {
  const raw = await fs.readFile(filePath, "utf-8")
  const result = {
    title: "",
    description: "",
    order: 0
  }

  const match = raw.match(/---\n([\s\S]*?)\n---/)
  if (!match) {
    return result
  }

  const yaml = match[1]

  for (const line of yaml.split("\n")) {
    const [key, value] = line.split(":").map((s) => s.trim())
    if (key === "title") result.title = value
    if (key === "description") result.description = value
    if (key === "order") result.order = Number(value)
  }

  return result
}

async function walk(dir: string, basePath: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      const nested = await walk(fullPath, basePath)
      files.push(...nested)
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      files.push(path.relative(basePath, fullPath))
    }
  }
  return files
}

async function generate() {
  const basePath = path.join(process.cwd(), "src", "docs")
  const files = await walk(basePath, basePath)

  const normalGroups: Record<string, Item[]> = {}

  for (const file of files) {
    const parts = file.split(path.sep)
    const section = String(parts[0]).toLowerCase()
    const slug = `${file.replace(/\.mdx$/, "").replace(/\\/g, "/")}`

    const { title, description, order } = await getFrontmatter(path.join(basePath, file))

    if (!normalGroups[section]) normalGroups[section] = []
    normalGroups[section].push({ slug, title, description, order })
  }

  if (normalGroups["getting-started"]) {
    normalGroups["getting-started"].push({
      slug: "/llms.txt",
      title: "llms.txt",
      description:
        "LLMs for HQ Base UI are generated from the documentation and can be used to answer questions about the framework.",
      order: 4
    })
  }

  const result = sectionOrder.map((section, index) => {
    return {
      id: index + 1,
      section: section
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      children: (normalGroups[section] ?? []).sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))
    }
  })

  await fs.writeFile("src/components-search.json", JSON.stringify(result, null, 2))
  return result
}

async function build() {
  const groups = await generate()
  const lines: string[] = []

  for (const group of groups) {
    lines.push(
      `\n## ${group.section
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")}`
    )
    for (const item of group.children as Item[])
      lines.push(`- [${item.title}](${siteConfig.url}/docs/${item.slug}.md): ${item.description}`)
  }

  await fs.writeFile("public/llms.txt", lines.join("\n"))
}

build()
console.info(`✓ Generated llms`)
