export const siteConfig = {
  name: "HQ-UI",
  url: import.meta.env.VITE_APP_URL ?? "https://hq-baseui.vercel.app",
  description: "HQ-UI is a collection of open source components for building modern web applications.",
  author: {
    username: "dq-alhq",
    name: "Diqi Al-Haqqi",
    url: "https://x.com/dqalhq"
  },
  links: {
    github: "https://github.com/hq-kit/ui-base"
  },
  repo: {
    url: "https://github.com/hq-kit/ui-base"
  },
  cli: {
    version: "latest",
    command: "shadcn@latest"
  },
  shadcn: "npx shadcn@latest"
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "oklch(0.141 0.005 285.823)"
}
