import docs from "@/components-search.json"

export type Page = {
  slug: string
  title: string
  description: string
}

interface PageNeighbour {
  prev: Page | null
  next: Page | null
}

export function findNeighbour(slug?: string): PageNeighbour {
  const contents = docs.flatMap((i) => i.children)
  const sortedContents = [...contents]
    .filter((c) => !c.slug.includes("llms"))
    .sort((a, b) => {
      return a.order - b.order || a.slug.localeCompare(b.slug)
    })

  const currentIndex = sortedContents.findIndex((page) => page.slug === slug)

  if (currentIndex === -1) {
    return {
      prev: null,
      next: null
    }
  }

  return {
    prev: sortedContents[currentIndex - 1] ?? null,
    next: sortedContents[currentIndex + 1] ?? null
  }
}
