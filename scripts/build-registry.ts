import type { RegistryItem } from "shadcn/schema"
import { promises as fs } from "node:fs"
import path from "node:path"
import { blocks } from "./registries/blocks"
import { cssUtils } from "./registries/css-utils"
import { samples } from "./registries/samples"
import { themeRegistries } from "./registries/themes"
import { uiComponents } from "./registries/ui"

const registries: RegistryItem[] = [...uiComponents, ...samples, ...cssUtils, ...blocks, ...themeRegistries]

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "hq",
  homepage: "https://hq-ui.vercel.app",
  items: registries
}

await fs.writeFile(path.join(process.cwd(), "registry.json"), JSON.stringify(registry, null, 2))

console.info(`  - UI Components: ${uiComponents.length}`)
console.info(`  - Samples: ${samples.length}`)
console.info(`  - Blocks: ${blocks.length}`)
console.info(`  - CSS Utils: ${cssUtils.length}`)
console.info(`  - Themes: ${themeRegistries.length}`)
