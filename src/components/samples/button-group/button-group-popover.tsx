import { IconBrandGithubCopilot, IconChevronDown } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field } from "@/components/ui/field"
import { Popover } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"

export default () => {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <IconBrandGithubCopilot /> Copilot
      </Button>
      <Popover>
        <Popover.Trigger render={<Button aria-label="Open Popover" size="icon" variant="outline" />}>
          <IconChevronDown />
        </Popover.Trigger>
        <Popover.Content align="end" className="rounded-xl text-sm">
          <Popover.Header>
            <Popover.Title>Start a new task with Copilot</Popover.Title>
            <Popover.Description>Describe your task in natural language.</Popover.Description>
          </Popover.Header>
          <Field>
            <Field.Label className="sr-only" htmlFor="task">
              Task Description
            </Field.Label>
            <Textarea className="resize-none" id="task" placeholder="I need to..." />
            <Field.Description>Copilot will open a pull request for review.</Field.Description>
          </Field>
        </Popover.Content>
      </Popover>
    </ButtonGroup>
  )
}
