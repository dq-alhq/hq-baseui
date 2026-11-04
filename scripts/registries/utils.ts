function getUIComponents(content: string) {
  const regex = /(?<=from\s+['"])([^'"]+)/g
  const components = content.match(regex)

  return Array.from(new Set(components?.filter((c) => c.includes("/ui")).map((c) => c.split("/").pop())))
}

function getChildComponents(content: string) {
  const regex = /(?<=from\s+['"]\.\/)([^'"]+)/g
  const childrens = content.match(regex)
  return Array.from(new Set(childrens))
}

function getDeps(content: string) {
  const regex = /(?<=from\s+['"])([^'"]+)/g
  const excludes = ["react", "@/hooks/use-mobile", "@/hooks/use-file-upload", "@internationalized/date"]

  const replacement = [
    { from: "motion/react", to: "motion" },
    { from: "recharts", to: "recharts" },
    { from: "@base-ui/react", to: "@base-ui/react" }
  ]

  const deps = content
    .match(regex)
    ?.filter((dep) => !excludes.includes(dep) && !dep.includes("./") && !dep.includes("@/components/"))
    .map((dep) => {
      for (const { from, to } of replacement) {
        if (dep.startsWith(from)) {
          return to
        }
      }

      return dep
    })

  return Array.from(new Set(deps))
}

function checkHooks(content: string): string[] {
  const regex = /(?<=from\s+['"])([^'"]+)/g

  return (
    content
      .match(regex)
      ?.filter((c) => c.includes("/hooks/"))
      .map((c) => c.split("/").pop()!) ?? []
  )
}

function cleanRegistry(content: string) {
  return content.replaceAll(',"registryDependencies":[]', "").replaceAll(',"dependencies":[]', "")
}

export { checkHooks, cleanRegistry, getChildComponents, getDeps, getUIComponents }
