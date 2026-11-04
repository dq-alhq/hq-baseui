import { TanStackDevtools } from "@tanstack/react-devtools"
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { fonts } from "#/lib/fonts"
import appCss from "../styles.css?url"

const THEME_INIT_SCRIPT = `!function(){try{let e=document.documentElement,t=localStorage.getItem("font"),s=localStorage.getItem("theme");if(s){let a=JSON.parse(s),r=a?.state?.theme;"system"!==r&&r||(r=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),"dark"===r?e.classList.add("dark"):e.classList.remove("dark");let o=a.state.preset[r];if(o)for(let l in o)e.style.setProperty("--"+l,o[l])}if(t){let n=JSON.parse(t)?.state?.fontSans||"Geist Variable",i=JSON.parse(t)?.state?.fontMono||"Geist Mono Variable";e.style.setProperty("--font-sans",n),e.style.setProperty("--font-mono",i)}}catch(m){}}();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "HQ Base UI"
      }
    ],
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/icon.svg"
      },
      {
        rel: "alternate icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "preconnect",
        href: "https://fonts.bunny.net"
      },
      {
        rel: "stylesheet",
        href: `https://fonts.bunny.net/css?family=${fonts}`
      }
    ]
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => <div>Not Found</div>
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="min-h-svh font-sans wrap-anywhere antialiased">
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right"
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />
            }
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
