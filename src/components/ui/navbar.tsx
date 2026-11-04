"use client"

import { mergeProps, useRender } from "@base-ui/react"
import { IconMenu2 } from "@tabler/icons-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import {
  type ComponentProps,
  type CSSProperties,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "./button"
import { Separator } from "./separator"
import { Sheet } from "./sheet"

const NAVBAR_HEIGHT = "3.5rem"
const NAVBAR_HEIGHT_MOBILE = "3rem"
const NAVBAR_GAP = "1rem"

type NavbarContextProps = {
  open: boolean
  setOpen: (open: boolean) => void
  isMobile: boolean
  toggleNavbar: () => void
}

const NavbarContext = createContext<NavbarContextProps | null>(null)

const useNavbar = () => {
  const context = useContext(NavbarContext)
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider.")
  }

  return context
}

const NavbarProvider = ({
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  ...props
}: ComponentProps<"div"> & {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  sticky?: boolean
}) => {
  const isMobile = useIsMobile()

  // This is the internal state of the navbar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = useState(false)
  const open = openProp ?? _open
  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }
    },
    [setOpenProp, open]
  )

  // Helper to toggle the navbar.
  const toggleNavbar = useCallback(() => {
    return isMobile && setOpen((open) => !open)
  }, [isMobile, setOpen])

  const contextValue = useMemo<NavbarContextProps>(
    () => ({
      open,
      setOpen,
      isMobile,
      toggleNavbar
    }),
    [open, setOpen, isMobile, toggleNavbar]
  )

  return (
    <NavbarContext.Provider value={contextValue}>
      <div
        className={cn(
          "has-data-[variant=inset]:bg-sidebar relative isolate flex w-full flex-col has-data-[variant=inset]:max-h-dvh has-data-[variant=inset]:items-center",
          className
        )}
        style={
          {
            "--navbar-height": isMobile ? NAVBAR_HEIGHT_MOBILE : NAVBAR_HEIGHT,
            "--navbar-gap": NAVBAR_GAP,
            "--navbar-width": `calc(100% - ${NAVBAR_GAP} - ${NAVBAR_GAP})`
          } as CSSProperties
        }
        {...props}
      />
    </NavbarContext.Provider>
  )
}

const Navbar = ({
  variant = "navbar",
  fluid = false,
  container = false,
  sticky = false,
  className,
  children,
  ...props
}: ComponentProps<"div"> & {
  variant?: "navbar" | "floating" | "inset"
  sticky?: boolean
  fluid?: boolean
  container?: boolean
}) => {
  const { isMobile } = useNavbar()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let lastY = window.scrollY
    let accumulated = 0

    const onScroll = () => {
      const currentY = window.scrollY
      const diff = currentY - lastY

      accumulated += diff

      if (currentY <= 50) {
        setVisible(true)
        accumulated = 0
      } else if (accumulated > 100) {
        setVisible(false)
        accumulated = 0
      } else if (accumulated < -50) {
        setVisible(true)
        accumulated = 0
      }

      lastY = currentY
    }

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <div
      className={cn(
        "group peer text-sidebar-foreground relative z-50",
        variant === "floating"
          ? "mx-auto min-h-[calc(var(--navbar-height)+var(--navbar-gap))] w-full max-w-7xl xl:max-w-(--breakpoint-xl)"
          : "min-h-(--navbar-height)"
      )}
      data-container={container}
      data-fluid={fluid}
      data-mobile={isMobile}
      data-slot="navbar"
      data-sticky={sticky}
      data-variant={variant}
    >
      {/* This is what handles the navbar gap on desktop */}
      <div
        className={cn(
          "from-background via-background fixed inset-x-0 top-0 bg-linear-to-b to-transparent transition-all",
          variant === "floating" ? "h-[calc(var(--navbar-height)+var(--navbar-gap))]" : "h-(--navbar-height)",
          !sticky && !visible && "h-0"
        )}
        data-slot="navbar-gap"
      />
      <div
        className={cn(
          "bg-sidebar group-data-[variant=floating]:ring-sidebar-border fixed inset-x-0 z-30 mx-auto h-(--navbar-height) transition-all group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1",
          sticky || visible ? "translate-y-0" : "-translate-y-[calc(var(--navbar-height)+var(--navbar-gap)+1px)]",
          variant === "floating"
            ? "top-(--navbar-gap) w-(--navbar-width) max-w-7xl group-data-[fluid=true]:max-w-full xl:max-w-(--breakpoint-xl)"
            : "top-0 w-full",
          variant === "navbar" && "border-b-sidebar-border border-b",
          className
        )}
        data-slot="navbar-container"
        {...props}
      >
        <div
          className={cn(
            "mx-auto flex size-full max-w-7xl items-center overflow-hidden xl:max-w-(--breakpoint-xl)",
            isMobile ? "px-0" : "px-(--navbar-gap) group-data-[fluid=true]:px-0",
            fluid && "max-w-none xl:max-w-none"
          )}
          data-navbar="navbar"
          data-slot="navbar-inner"
        >
          {isMobile && (
            <div className="mr-2 flex items-center gap-2 p-2">
              <NavbarTrigger />
              <Separator orientation="vertical" />
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

const NavbarTrigger = ({ className, onClick, ...props }: ComponentProps<typeof Button>) => {
  const { toggleNavbar } = useNavbar()

  return (
    <Button
      className={cn(className)}
      data-sidebar="trigger"
      data-slot="navbar-trigger"
      onClick={(e) => {
        onClick?.(e)
        toggleNavbar()
      }}
      size="icon"
      variant="ghost"
      {...props}
    >
      <IconMenu2 />
      <span className="sr-only">Toggle Navbar</span>
    </Button>
  )
}

const NavbarInset = ({ className, ...props }: ComponentProps<"main">) => (
  <main
    className={cn(
      "bg-background relative mx-auto flex min-h-[calc(100vh-(var(--navbar-height)+var(--navbar-gap)))] flex-col overflow-auto peer-data-[variant=floating]:min-h-[calc(100vh-(var(--navbar-height)+var(--navbar-gap)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:mt-0! md:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
      "w-[calc(100%-var(--navbar-gap))] peer-data-[container=true]:max-w-7xl peer-data-[variant=default]:w-full xl:peer-data-[container=true]:max-w-(--breakpoint-xl)",
      className
    )}
    data-slot="navbar-inset"
    {...props}
  />
)

const NavbarHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("bg-sidebar sticky left-0 z-10 flex items-center gap-2 p-2", className)}
    data-navbar="header"
    data-slot="navbar-header"
    {...props}
  />
)

const NavbarActions = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("ml-auto inline-flex items-center gap-2 p-2", className)}
    data-navbar="actions"
    data-slot="navbar-actions"
    {...props}
  />
)

const NavbarSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => (
  <Separator
    className={cn("bg-sidebar-border mx-2 h-full w-px", className)}
    data-navbar="separator"
    data-slot="sidebar-separator"
    {...props}
  />
)

const NavbarContent = ({ className, ...props }: ComponentProps<"div">) => {
  const { isMobile, open, setOpen } = useNavbar()
  if (isMobile) {
    return (
      <Sheet onOpenChange={setOpen} open={open}>
        <Sheet.Trigger className="sr-only" />
        <Sheet.Content
          className="bg-sidebar text-sidebar-foreground p-0 [&>button]:hidden"
          {...props}
          data-navbar="navbar"
          side="left"
        >
          <Sheet.Header className="sr-only p-0!">
            <Sheet.Title>Navbar</Sheet.Title>
            <Sheet.Description>Displays the mobile navbar.</Sheet.Description>
          </Sheet.Header>
          <div className="isolate flex scrollbar-none flex-col overflow-auto will-change-scroll">{props.children}</div>
        </Sheet.Content>
      </Sheet>
    )
  }
  return (
    <div
      className={cn(
        "flex min-h-0 flex-1 scrollbar-none gap-0 overflow-auto",
        "scroll-fade-r mr-12 flex-row items-center",
        "in-data-[slot=sheet-content]:mr-0 in-data-[slot=sheet-content]:flex-col in-data-[slot=sheet-content]:items-start",
        className
      )}
      data-navbar="content"
      data-slot="navbar-content"
      {...props}
    />
  )
}

const NavbarGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "relative flex flex-row p-2 in-data-[slot=sheet-content]:w-full in-data-[slot=sheet-content]:min-w-0 in-data-[slot=sheet-content]:flex-col",
      className
    )}
    data-navbar="group"
    data-slot="navbar-group"
    {...props}
  />
)

const NavbarGroupContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex flex-row text-sm in-data-[slot=sheet-content]:w-full in-data-[slot=sheet-content]:min-w-0 in-data-[slot=sheet-content]:flex-col in-data-[slot=sheet-content]:items-start",
      className
    )}
    data-navbar="group-content"
    data-slot="navbar-group-content"
    {...props}
  />
)

const NavbarMenu = ({ className, ...props }: ComponentProps<"ul">) => (
  <ul
    className={cn(
      "flex flex-row gap-2 in-data-[slot=sheet-content]:w-full in-data-[slot=sheet-content]:min-w-0 in-data-[slot=sheet-content]:flex-col",
      className
    )}
    data-navbar="menu"
    data-slot="navbar-menu"
    {...props}
  />
)

const NavbarMenuItem = ({ className, ...props }: ComponentProps<"li">) => (
  <li
    className={cn("group/menu-item relative", className)}
    data-navbar="menu-item"
    data-slot="navbar-menu-item"
    {...props}
  />
)

const navbarMenuButtonVariants = cva(
  "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm whitespace-nowrap outline-hidden transition-[width,height,padding] group-has-data-[navbar=menu-action]/menu-item:pr-8 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-active:font-medium [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_var(--sidebar-border)] hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

const NavbarMenuButton = ({
  isActive = false,
  variant = "default",
  size = "default",
  className,
  render,
  ...props
}: useRender.ComponentProps<"button"> &
  React.ComponentProps<"button"> & {
    isActive?: boolean
  } & VariantProps<typeof navbarMenuButtonVariants>) => {
  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(
      {
        className: cn(navbarMenuButtonVariants({ variant, size }), "in-data-[slot=sheet-content]:w-full", className)
      },
      props
    ),
    render,
    state: {
      slot: "sidebar-menu-button",
      sidebar: "menu-button",
      size,
      active: isActive
    }
  })
}

Navbar.Provider = NavbarProvider
Navbar.Content = NavbarContent
Navbar.Group = NavbarGroup
Navbar.GroupContent = NavbarGroupContent
Navbar.Header = NavbarHeader
Navbar.Actions = NavbarActions
Navbar.Inset = NavbarInset
Navbar.Menu = NavbarMenu
Navbar.MenuButton = NavbarMenuButton
Navbar.MenuItem = NavbarMenuItem
Navbar.Separator = NavbarSeparator
Navbar.Trigger = NavbarTrigger

export {
  Navbar,
  NavbarActions,
  NavbarContent,
  NavbarGroup,
  NavbarGroupContent,
  NavbarHeader,
  NavbarInset,
  NavbarMenu,
  NavbarMenuButton,
  NavbarMenuItem,
  NavbarProvider,
  NavbarSeparator,
  NavbarTrigger,
  useNavbar
}
