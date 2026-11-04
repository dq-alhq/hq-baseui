"use client"

import { useState } from "react"
import { Menubar } from "@/components/ui/menubar"

export default () => {
  const [user, setUser] = useState("benoit")
  const [theme, setTheme] = useState("system")

  return (
    <Menubar className="w-72">
      <Menubar.Menu>
        <Menubar.Trigger>Profiles</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.RadioGroup onValueChange={setUser} value={user}>
            <Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>
            <Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>
            <Menubar.RadioItem value="luis">Luis</Menubar.RadioItem>
          </Menubar.RadioGroup>
          <Menubar.Separator />
          <Menubar.Item inset>Edit...</Menubar.Item>
          <Menubar.Item inset>Add Profile...</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Theme</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.RadioGroup onValueChange={setTheme} value={theme}>
            <Menubar.RadioItem value="light">Light</Menubar.RadioItem>
            <Menubar.RadioItem value="dark">Dark</Menubar.RadioItem>
            <Menubar.RadioItem value="system">System</Menubar.RadioItem>
          </Menubar.RadioGroup>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  )
}
