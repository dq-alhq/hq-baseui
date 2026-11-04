import { IconCheck, IconInfoCircle, IconSearch, IconSparkles } from "@tabler/icons-react"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Spinner } from "@/components/ui/spinner"

export default () => {
  return (
    <Field.Set>
      <Field>
        <Field.Label htmlFor="input-kbd-22">Input Group with Kbd</Field.Label>
        <InputGroup>
          <InputGroup.Input id="input-kbd-22" />
          <InputGroup.Addon>
            <Kbd>⌘K</Kbd>
          </InputGroup.Addon>
        </InputGroup>
        <InputGroup>
          <InputGroup.Input id="input-kbd-23" />
          <InputGroup.Addon align="inline-end">
            <Kbd>⌘K</Kbd>
          </InputGroup.Addon>
        </InputGroup>
        <InputGroup>
          <InputGroup.Input id="input-search-apps-24" placeholder="Search for Apps..." />
          <InputGroup.Addon align="inline-end">Ask AI</InputGroup.Addon>
          <InputGroup.Addon align="inline-end">
            <Kbd>Tab</Kbd>
          </InputGroup.Addon>
        </InputGroup>
        <InputGroup>
          <InputGroup.Input id="input-search-type-25" placeholder="Type to search..." />
          <InputGroup.Addon align="inline-start">
            <IconSparkles />
          </InputGroup.Addon>
          <InputGroup.Addon align="inline-end">
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>C</Kbd>
            </KbdGroup>
          </InputGroup.Addon>
        </InputGroup>
      </Field>
      <Field>
        <Field.Label htmlFor="input-username-26">Username</Field.Label>
        <InputGroup>
          <InputGroup.Input defaultValue="shadcn" id="input-username-26" />
          <InputGroup.Addon align="inline-end">
            <div className="flex size-4 items-center justify-center rounded-full bg-green-500 dark:bg-green-800">
              <IconCheck className="size-3 text-white" />
            </div>
          </InputGroup.Addon>
        </InputGroup>
        <Field.Description className="text-green-700">This username is available.</Field.Description>
      </Field>
      <InputGroup>
        <InputGroup.Input id="input-search-docs-27" placeholder="Search documentation..." />
        <InputGroup.Addon>
          <IconSearch />
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">12 results</InputGroup.Addon>
      </InputGroup>
      <InputGroup data-disabled="true">
        <InputGroup.Input disabled id="input-search-disabled-28" placeholder="Search documentation..." />
        <InputGroup.Addon>
          <IconSearch />
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">Disabled</InputGroup.Addon>
      </InputGroup>
      <Field.Set className="grid grid-cols-2 gap-4">
        <Field>
          <Field.Label htmlFor="input-group-11">First Name</Field.Label>
          <InputGroup>
            <InputGroup.Input id="input-group-11" placeholder="First Name" />
            <InputGroup.Addon align="inline-end">
              <IconInfoCircle />
            </InputGroup.Addon>
          </InputGroup>
        </Field>
        <Field>
          <Field.Label htmlFor="input-group-12">Last Name</Field.Label>
          <InputGroup>
            <InputGroup.Input id="input-group-12" placeholder="Last Name" />
            <InputGroup.Addon align="inline-end">
              <IconInfoCircle />
            </InputGroup.Addon>
          </InputGroup>
        </Field>
      </Field.Set>
      <Field data-disabled="true">
        <Field.Label htmlFor="input-group-29">Loading (&quot;data-disabled=&quot;true&quot;)</Field.Label>
        <InputGroup>
          <InputGroup.Input defaultValue="shadcn" disabled id="input-group-29" />
          <InputGroup.Addon align="inline-end">
            <Spinner />
          </InputGroup.Addon>
        </InputGroup>
        <Field.Description>This is a description of the input group.</Field.Description>
      </Field>
    </Field.Set>
  )
}
