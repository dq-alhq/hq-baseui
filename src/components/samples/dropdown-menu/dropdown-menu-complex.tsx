"use client"

import {
  IconBell,
  IconCreditCard,
  IconDeviceDesktop,
  IconDeviceFloppy,
  IconDots,
  IconDownload,
  IconFileCode,
  IconFilePlus,
  IconFileText,
  IconFileX,
  IconFolder,
  IconFolderCode,
  IconFolderOpen,
  IconFolderSearch,
  IconHelp,
  IconKeyboard,
  IconLanguage,
  IconLayoutNavbar,
  IconLayoutSidebar,
  IconLogout,
  IconMail,
  IconMoon,
  IconPalette,
  IconSettings,
  IconShield,
  IconSun,
  IconUserCircle
} from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/ui/dropdown-menu"

export default () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true
  })
  const [theme, setTheme] = useState("light")

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger render={<Button variant="outline" />}>Complex Menu</DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-44">
        <DropdownMenu.Group>
          <DropdownMenu.Label>File</DropdownMenu.Label>
          <DropdownMenu.Item>
            <IconFilePlus />
            New File
            <DropdownMenu.Shortcut>⌘N</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <IconFolder />
            New Folder
            <DropdownMenu.Shortcut>⇧⌘N</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>
              <IconFolderOpen />
              Open Recent
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent>
                <DropdownMenu.Group>
                  <DropdownMenu.Label>Recent Projects</DropdownMenu.Label>
                  <DropdownMenu.Item>
                    <IconFolderCode />
                    Project Alpha
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <IconFolderCode />
                    Project Beta
                  </DropdownMenu.Item>
                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger>
                      <IconDots />
                      More Projects
                    </DropdownMenu.SubTrigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.SubContent>
                        <DropdownMenu.Item>
                          <IconFileCode />
                          Project Gamma
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                          <IconFileX />
                          Project Delta
                        </DropdownMenu.Item>
                      </DropdownMenu.SubContent>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Sub>
                </DropdownMenu.Group>
                <DropdownMenu.Separator />
                <DropdownMenu.Group>
                  <DropdownMenu.Item>
                    <IconFolderSearch />
                    Browse...
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <IconDeviceFloppy />
            Save
            <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <IconDownload />
            Export
            <DropdownMenu.Shortcut>⇧⌘E</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Label>View</DropdownMenu.Label>
          <DropdownMenu.CheckboxItem
            checked={notifications.email}
            onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked === true })}
          >
            <IconLayoutSidebar />
            Show Sidebar
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            checked={notifications.sms}
            onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked === true })}
          >
            <IconLayoutNavbar />
            Show Status Bar
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>
              <IconPalette />
              Theme
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent>
                <DropdownMenu.Group>
                  <DropdownMenu.Label>Appearance</DropdownMenu.Label>
                  <DropdownMenu.RadioGroup onValueChange={setTheme} value={theme}>
                    <DropdownMenu.RadioItem value="light">
                      <IconSun />
                      Light
                    </DropdownMenu.RadioItem>
                    <DropdownMenu.RadioItem value="dark">
                      <IconMoon />
                      Dark
                    </DropdownMenu.RadioItem>
                    <DropdownMenu.RadioItem value="system">
                      <IconDeviceDesktop />
                      System
                    </DropdownMenu.RadioItem>
                  </DropdownMenu.RadioGroup>
                </DropdownMenu.Group>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Label>Account</DropdownMenu.Label>
          <DropdownMenu.Item>
            <IconUserCircle />
            Profile
            <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <IconCreditCard />
            Billing
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>
              <IconSettings />
              Settings
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent>
                <DropdownMenu.Group>
                  <DropdownMenu.Label>Preferences</DropdownMenu.Label>
                  <DropdownMenu.Item>
                    <IconKeyboard />
                    Keyboard Shortcuts
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <IconLanguage />
                    Language
                  </DropdownMenu.Item>
                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger>
                      <IconBell />
                      Notifications
                    </DropdownMenu.SubTrigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.SubContent>
                        <DropdownMenu.Group>
                          <DropdownMenu.Label>Notification Types</DropdownMenu.Label>
                          <DropdownMenu.CheckboxItem
                            checked={notifications.push}
                            onCheckedChange={(checked) =>
                              setNotifications({
                                ...notifications,
                                push: checked === true
                              })
                            }
                          >
                            <IconBell />
                            Push Notifications
                          </DropdownMenu.CheckboxItem>
                          <DropdownMenu.CheckboxItem
                            checked={notifications.email}
                            onCheckedChange={(checked) =>
                              setNotifications({
                                ...notifications,
                                email: checked === true
                              })
                            }
                          >
                            <IconMail />
                            Email Notifications
                          </DropdownMenu.CheckboxItem>
                        </DropdownMenu.Group>
                      </DropdownMenu.SubContent>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Sub>
                </DropdownMenu.Group>
                <DropdownMenu.Separator />
                <DropdownMenu.Group>
                  <DropdownMenu.Item>
                    <IconShield />
                    Privacy & Security
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <IconHelp />
            Help & Support
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <IconFileText />
            Documentation
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item variant="destructive">
            <IconLogout />
            Sign Out
            <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
