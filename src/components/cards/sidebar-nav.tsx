import {
  IconActivity,
  IconAnalyze,
  IconArrowsExchange,
  IconBell,
  IconBook,
  IconBuildingBank,
  IconCalendar,
  IconChartBar,
  IconChartPie,
  IconCreditCard,
  IconFile,
  IconGlobe,
  IconHelp,
  IconMessage,
  IconPaint,
  IconShield,
  IconTarget,
  IconTrendingUp,
  IconUser,
  IconWallet
} from "@tabler/icons-react"
import { cn } from "cn"
import { Card } from "@/components/ui/card"
import { Sidebar } from "@/components/ui/sidebar"

function SidebarSection({
  label,
  children,
  className
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Card className={cn("w-full overflow-hidden rounded-3xl py-0", className)}>
      <Sidebar.Provider className="min-h-0">
        <Sidebar className="w-full bg-transparent" collapsible="none">
          <Sidebar.Content className="gap-0 overflow-hidden">
            <Sidebar.Group>
              <Sidebar.GroupLabel>{label}</Sidebar.GroupLabel>
              <Sidebar.GroupContent>
                <Sidebar.Menu className="gap-1">{children}</Sidebar.Menu>
              </Sidebar.GroupContent>
            </Sidebar.Group>
          </Sidebar.Content>
        </Sidebar>
      </Sidebar.Provider>
    </Card>
  )
}

export function SidebarNav() {
  return (
    <div className="grid w-full grid-cols-2 gap-4 xl:gap-6">
      <SidebarSection className="xl:col-start-1 xl:row-start-2" label="Overview">
        <Sidebar.MenuItem>
          <Sidebar.MenuButton isActive>
            <IconAnalyze />
            Analytics
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconArrowsExchange strokeWidth={2} />
            Transactions
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconTrendingUp strokeWidth={2} />
            Investments
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconBuildingBank />
            Accounts
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconChartPie />
            Spending
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      </SidebarSection>

      <SidebarSection className="xl:col-start-1 xl:row-start-1" label="Planning">
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconFile />
            Documents
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconWallet />
            Budget
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconChartBar />
            Reports
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconTarget />
            Goals
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconCalendar />
            Calendar
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      </SidebarSection>

      <SidebarSection className="flex xl:col-start-2 xl:row-start-1" label="Support">
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconHelp />
            Help Center
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconBook />
            Docs
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconMessage />
            Contact Us
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconActivity />
            Status
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconGlobe />
            Community
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      </SidebarSection>

      <SidebarSection className="flex xl:col-start-2 xl:row-start-2" label="Account">
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconUser />
            Profile
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton isActive>
            <IconCreditCard />
            Billing
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconBell />
            Notifications
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconShield />
            Security
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <IconPaint />
            Appearance
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      </SidebarSection>
    </div>
  )
}
