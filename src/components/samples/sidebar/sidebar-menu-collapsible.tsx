"use client"

import { IconChevronRight } from "@tabler/icons-react"
import { Collapsible } from "@/components/ui/collapsible"
import { Sidebar } from "@/components/ui/sidebar"

const items = [
  {
    title: "Getting Started",
    url: "#",
    items: [
      {
        title: "Installation",
        url: "#"
      },
      {
        title: "Project Structure",
        url: "#"
      }
    ]
  },
  {
    title: "Build Your Application",
    url: "#",
    items: [
      {
        title: "Routing",
        url: "#"
      },
      {
        title: "Data Fetching",
        url: "#",
        isActive: true
      },
      {
        title: "Rendering",
        url: "#"
      },
      {
        title: "Caching",
        url: "#"
      },
      {
        title: "Styling",
        url: "#"
      },
      {
        title: "Optimizing",
        url: "#"
      },
      {
        title: "Configuring",
        url: "#"
      },
      {
        title: "Testing",
        url: "#"
      },
      {
        title: "Authentication",
        url: "#"
      },
      {
        title: "Deploying",
        url: "#"
      },
      {
        title: "Upgrading",
        url: "#"
      },
      {
        title: "Examples",
        url: "#"
      }
    ]
  },
  {
    title: "API Reference",
    url: "#",
    items: [
      {
        title: "Components",
        url: "#"
      },
      {
        title: "File Conventions",
        url: "#"
      },
      {
        title: "Functions",
        url: "#"
      },
      {
        title: "next.config.js Options",
        url: "#"
      },
      {
        title: "CLI",
        url: "#"
      },
      {
        title: "Edge Runtime",
        url: "#"
      }
    ]
  },
  {
    title: "Architecture",
    url: "#",
    items: [
      {
        title: "Accessibility",
        url: "#"
      },
      {
        title: "Fast Refresh",
        url: "#"
      },
      {
        title: "Next.js Compiler",
        url: "#"
      },
      {
        title: "Supported Browsers",
        url: "#"
      },
      {
        title: "Turbopack",
        url: "#"
      }
    ]
  }
]

export default () => {
  return (
    <Sidebar.Provider>
      <Sidebar>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                {items.map((item, index) => (
                  <Collapsible className="group/collapsible" defaultOpen={index === 0} key={index}>
                    <Sidebar.MenuItem>
                      <Collapsible.Trigger render={<Sidebar.MenuButton />}>
                        <span>{item.title}</span>
                        <IconChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      </Collapsible.Trigger>
                      <Collapsible.Content>
                        <Sidebar.MenuSub>
                          {item.items.map((subItem, subIndex) => (
                            <Sidebar.MenuSubItem key={subIndex}>
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
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
      </Sidebar>
    </Sidebar.Provider>
  )
}
