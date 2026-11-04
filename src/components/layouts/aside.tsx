import docs from "@/components-search.json"
import { AsideLink } from "./aside-link"
export default function Aside() {
  return (
    <aside
      className="sticky top-14 max-h-[calc(100vh-56px)] w-64 overflow-x-hidden overflow-y-auto pr-8 transition xl:w-72"
      data-docs-sidebar-scroll
    >
      {docs.map((doc) => (
        <nav aria-label="Navigation" className="flex flex-col px-4" key={doc.section}>
          <ul className="space-y-1">
            <li className="text-foreground pointer-events-none mt-6 mb-2 px-2 py-0 font-mono text-xs font-medium uppercase">
              {doc.section}
            </li>
            {doc.children?.map((item) =>
              item.slug.startsWith("/") ? (
                <AsideLink href={item.slug} key={item.slug} target="_blank">
                  {item.title}
                </AsideLink>
              ) : (
                <AsideLink key={item.slug} params={{ _splat: item.slug }} to={"/docs/$"}>
                  {item.title}
                </AsideLink>
              )
            )}
          </ul>
        </nav>
      ))}
    </aside>
  )
}
