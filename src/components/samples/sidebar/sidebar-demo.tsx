"use client"

import {
  IconBadge,
  IconBell,
  IconBook,
  IconBrandAppgallery,
  IconChartPie,
  IconChevronRight,
  IconCommand,
  IconCreditCard,
  IconDots,
  IconFolder,
  IconFrame,
  IconLogout,
  IconMap,
  IconPlus,
  IconRobot,
  IconSelector,
  IconSettings,
  IconShare3,
  IconSparkles,
  IconTerminal2,
  IconTrash,
  IconWaveform
} from "@tabler/icons-react"
import { type ComponentProps, type ElementType, useState } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Collapsible } from "@/components/ui/collapsible"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Sidebar, useSidebar } from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg"
  },
  teams: [
    {
      name: "Acme Inc",
      logo: IconBrandAppgallery,
      plan: "Enterprise"
    },
    {
      name: "Acme Corp.",
      logo: IconWaveform,
      plan: "Startup"
    },
    {
      name: "Evil Corp.",
      logo: IconCommand,
      plan: "Free"
    }
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: IconTerminal2,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#"
        },
        {
          title: "Starred",
          url: "#"
        },
        {
          title: "Settings",
          url: "#"
        }
      ]
    },
    {
      title: "Models",
      url: "#",
      icon: IconRobot,
      items: [
        {
          title: "Genesis",
          url: "#"
        },
        {
          title: "Explorer",
          url: "#"
        },
        {
          title: "Quantum",
          url: "#"
        }
      ]
    },
    {
      title: "Documentation",
      url: "#",
      icon: IconBook,
      items: [
        {
          title: "Introduction",
          url: "#"
        },
        {
          title: "Get Started",
          url: "#"
        },
        {
          title: "Tutorials",
          url: "#"
        },
        {
          title: "Changelog",
          url: "#"
        }
      ]
    },
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
      items: [
        {
          title: "General",
          url: "#"
        },
        {
          title: "Team",
          url: "#"
        },
        {
          title: "Billing",
          url: "#"
        },
        {
          title: "Limits",
          url: "#"
        }
      ]
    }
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: IconFrame
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: IconChartPie
    },
    {
      name: "Travel",
      url: "#",
      icon: IconMap
    }
  ]
}

function TeamSwitcher({
  teams
}: {
  teams: {
    name: string
    logo: ElementType
    plan: string
  }[]
}) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = useState(teams[0])

  if (!activeTeam) {
    return null
  }

  return (
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <DropdownMenu>
          <DropdownMenu.Trigger
            render={
              <Sidebar.MenuButton
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                size="lg"
              />
            }
          >
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <activeTeam.logo className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{activeTeam.name}</span>
              <span className="truncate text-xs">{activeTeam.plan}</span>
            </div>
            <IconSelector className="ml-auto" />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            align="start"
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenu.Group>
              <DropdownMenu.Label className="text-muted-foreground text-xs">Teams</DropdownMenu.Label>
              {teams.map((team, index) => (
                <DropdownMenu.Item className="gap-2 p-2" key={team.name} onClick={() => setActiveTeam(team)}>
                  <div className="flex size-6 items-center justify-center rounded-md border">
                    <team.logo className="size-3.5 shrink-0" />
                  </div>
                  {team.name}
                  <DropdownMenu.Shortcut>⌘{index + 1}</DropdownMenu.Shortcut>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item className="gap-2 p-2">
                <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                  <IconPlus className="size-4" />
                </div>
                <div className="text-muted-foreground font-medium">Add team</div>
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  )
}

function NavMain({
  items
}: {
  items: {
    title: string
    url: string
    icon?: ElementType
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <Sidebar.Group>
      <Sidebar.GroupLabel>Platform</Sidebar.GroupLabel>
      <Sidebar.Menu>
        {items.map((item) => (
          <Collapsible className="group/collapsible" defaultOpen={item.isActive} key={item.title}>
            <Sidebar.MenuItem>
              <Collapsible.Trigger render={<Sidebar.MenuButton tooltip={item.title} />}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                <IconChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Sidebar.MenuSub>
                  {item.items?.map((subItem) => (
                    <Sidebar.MenuSubItem key={subItem.title}>
                      <Sidebar.MenuSubButton render={<a href={subItem.url} />}>
                        <span>{subItem.title}</span>
                      </Sidebar.MenuSubButton>
                    </Sidebar.MenuSubItem>
                  ))}
                </Sidebar.MenuSub>
              </Collapsible.Content>
            </Sidebar.MenuItem>
          </Collapsible>
        ))}
      </Sidebar.Menu>
    </Sidebar.Group>
  )
}

function NavProjects({
  projects
}: {
  projects: {
    name: string
    url: string
    icon: ElementType
  }[]
}) {
  const { isMobile } = useSidebar()

  return (
    <Sidebar.Group className="group-data-[collapsible=icon]:hidden">
      <Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
      <Sidebar.Menu>
        {projects.map((item) => (
          <Sidebar.MenuItem key={item.name}>
            <Sidebar.MenuButton render={<a href={item.url} />}>
              <item.icon />
              <span>{item.name}</span>
            </Sidebar.MenuButton>
            <DropdownMenu>
              <DropdownMenu.Trigger render={<Sidebar.MenuAction showOnHover />}>
                <IconDots />
                <span className="sr-only">More</span>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content
                align={isMobile ? "end" : "start"}
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
              >
                <DropdownMenu.Item>
                  <IconFolder className="text-muted-foreground" />
                  <span>View Project</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <IconShare3 className="text-muted-foreground" />
                  <span>Share Project</span>
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                  <IconTrash className="text-muted-foreground" />
                  <span>Delete Project</span>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </Sidebar.MenuItem>
        ))}
        <Sidebar.MenuItem>
          <Sidebar.MenuButton className="text-sidebar-foreground/70">
            <IconDots className="text-sidebar-foreground/70" />
            <span>More</span>
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Group>
  )
}

function NavUser({
  user
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <DropdownMenu>
          <DropdownMenu.Trigger
            render={
              <Sidebar.MenuButton
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                size="lg"
              />
            }
          >
            <Avatar className="h-8 w-8 rounded-lg">
              <Avatar.Image alt={user.name} src={user.avatar} />
              <Avatar.Fallback className="rounded-lg">CN</Avatar.Fallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
            <IconSelector className="ml-auto size-4" />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            align="end"
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenu.Group>
              <DropdownMenu.Label className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <Avatar.Image alt={user.name} src={user.avatar} />
                    <Avatar.Fallback className="rounded-lg">CN</Avatar.Fallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                </div>
              </DropdownMenu.Label>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item>
                <IconSparkles />
                Upgrade to Pro
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item>
                <IconBadge />
                Account
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <IconCreditCard />
                Billing
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <IconBell />
                Notifications
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item>
                <IconLogout />
                Log out
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  )
}

export default function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar.Provider>
      <Sidebar collapsible="icon" {...props}>
        <Sidebar.Header>
          <TeamSwitcher teams={data.teams} />
        </Sidebar.Header>
        <Sidebar.Content>
          <NavMain items={data.navMain} />
          <NavProjects projects={data.projects} />
        </Sidebar.Content>
        <Sidebar.Footer>
          <NavUser user={data.user} />
        </Sidebar.Footer>
        <Sidebar.Rail />
      </Sidebar>
      <Sidebar.Inset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <Sidebar.Trigger className="-ml-1" />
          </div>
        </header>
      </Sidebar.Inset>
    </Sidebar.Provider>
  )
}
