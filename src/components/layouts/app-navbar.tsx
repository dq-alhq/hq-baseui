import { IconBrandGithub } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { IconApp } from "../icons"
import { ThemeSwitcher } from "../theme-switcher"
import { buttonVariants } from "../ui/button"
import { CommandPalette } from "./command-palette"
import NavLink from "./nav-link"

export default function AppNavbar() {
  return (
    <header className="bg-sidebar/20 sticky top-0 z-50 h-14 overflow-hidden border-b backdrop-blur-lg lg:block">
      <div className="mx-auto h-full px-4 sm:px-6 lg:max-w-(--breakpoint-2xl) lg:px-8 xl:border-x">
        <div className="relative flex items-center justify-between py-2.5">
          <div className="flex items-center gap-x-1.5">
            <Link className="mr-4 flex items-center gap-x-1.5" to="/">
              <IconApp className="text-foreground size-6" />
              <span className="ml-1 space-x-1">
                <strong className="text-foreground font-bold">HQ</strong>
                <span className="text-foreground/50">Base UI</span>
              </span>
            </Link>
            <div className="hidden items-center gap-1.5 sm:flex">
              <NavLink to={"/docs"}>Docs</NavLink>
              <NavLink to={"/themes"}>Themes</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-1.5">
            <CommandPalette />
            <a
              className={buttonVariants({ size: "icon", variant: "outline" })}
              href="https://github.com/hq-kit/ui-base"
              rel="noopener"
              target="_blank"
            >
              <IconBrandGithub />
            </a>
            <ThemeSwitcher size={"icon"} variant={"outline"} />
          </div>
        </div>
      </div>
    </header>
  )
}
