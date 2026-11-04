import { IconAppWindow, IconCode } from "@tabler/icons-react"
import { Tabs } from "@/components/ui/tabs"

export default () => {
  return (
    <Tabs defaultValue="preview">
      <Tabs.List>
        <Tabs.Trigger value="preview">
          <IconAppWindow />
          Preview
        </Tabs.Trigger>
        <Tabs.Trigger value="code">
          <IconCode />
          Code
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs>
  )
}
