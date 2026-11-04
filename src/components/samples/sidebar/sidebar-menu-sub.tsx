"use client"

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
                  <Sidebar.MenuItem key={index}>
                    <Sidebar.MenuButton render={<a href={item.url} />}>
                      <span>{item.title}</span>
                    </Sidebar.MenuButton>
                    <Sidebar.MenuSub>
                      {item.items.map((subItem, subIndex) => (
                        <Sidebar.MenuSubItem key={subIndex}>
                          <Sidebar.MenuSubButton render={<a href={subItem.url} />}>
                            <span>{subItem.title}</span>
                          </Sidebar.MenuSubButton>
                        </Sidebar.MenuSubItem>
                      ))}
                    </Sidebar.MenuSub>
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
      </Sidebar>
    </Sidebar.Provider>
  )
}
