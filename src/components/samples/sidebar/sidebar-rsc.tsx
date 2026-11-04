import { IconChartPie, IconFrame, IconHelp, IconMap, IconSend } from "@tabler/icons-react"
import { Suspense } from "react"
import { Sidebar } from "@/components/ui/sidebar"

const projects = [
  {
    name: "Design Engineering",
    url: "#",
    icon: IconFrame,
    badge: "24"
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: IconChartPie,
    badge: "12"
  },
  {
    name: "Travel",
    url: "#",
    icon: IconMap,
    badge: "3"
  },
  {
    name: "Support",
    url: "#",
    icon: IconHelp,
    badge: "21"
  },
  {
    name: "Feedback",
    url: "#",
    icon: IconSend,
    badge: "8"
  }
]

// Dummy fetch function.
async function fetchProjects() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return projects
}

export default () => {
  return (
    <Sidebar.Provider>
      <Sidebar>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Suspense fallback={<NavProjectsSkeleton />}>
                <NavProjects />
              </Suspense>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
      </Sidebar>
    </Sidebar.Provider>
  )
}

function NavProjectsSkeleton() {
  return (
    <Sidebar.Menu>
      {Array.from({ length: 5 }).map((_, index) => (
        <Sidebar.MenuItem key={index}>
          <Sidebar.MenuSkeleton showIcon />
        </Sidebar.MenuItem>
      ))}
    </Sidebar.Menu>
  )
}

async function NavProjects() {
  const projects = await fetchProjects()

  return (
    <Sidebar.Menu>
      {projects.map((project) => (
        <Sidebar.MenuItem key={project.name}>
          <Sidebar.MenuButton render={<a href={project.url} />}>
            <project.icon />
            <span>{project.name}</span>
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      ))}
    </Sidebar.Menu>
  )
}
