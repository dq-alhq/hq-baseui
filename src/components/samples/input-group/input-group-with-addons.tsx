"use client"

import {
  IconCopy,
  IconEyeOff,
  IconInfoCircle,
  IconMicrophone,
  IconRadio,
  IconSearch,
  IconStar
} from "@tabler/icons-react"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"
import { toast } from "@/components/ui/toast"

export default () => {
  return (
    <Field.Set>
      <Field>
        <Field.Label htmlFor="input-icon-left-05">Addon (inline-start)</Field.Label>
        <InputGroup>
          <InputGroup.Input id="input-icon-left-05" />
          <InputGroup.Addon>
            <IconSearch className="text-muted-foreground" />
          </InputGroup.Addon>
        </InputGroup>
      </Field>
      <Field>
        <Field.Label htmlFor="input-icon-right-07">Addon (inline-end)</Field.Label>
        <InputGroup>
          <InputGroup.Input id="input-icon-right-07" />
          <InputGroup.Addon align="inline-end">
            <IconEyeOff />
          </InputGroup.Addon>
        </InputGroup>
      </Field>
      <Field>
        <Field.Label htmlFor="input-icon-both-09">Addon (inline-start and inline-end)</Field.Label>
        <InputGroup>
          <InputGroup.Input id="input-icon-both-09" />
          <InputGroup.Addon>
            <IconMicrophone className="text-muted-foreground" />
          </InputGroup.Addon>
          <InputGroup.Addon align="inline-end">
            <IconRadio className="text-destructive animate-pulse" />
          </InputGroup.Addon>
        </InputGroup>
      </Field>
      <Field>
        <Field.Label htmlFor="input-addon-20">Addon (block-start)</Field.Label>
        <InputGroup className="h-auto">
          <InputGroup.Input id="input-addon-20" />
          <InputGroup.Addon align="block-start">
            <InputGroup.Text>First Name</InputGroup.Text>
            <IconInfoCircle className="text-muted-foreground ml-auto" />
          </InputGroup.Addon>
        </InputGroup>
      </Field>
      <Field>
        <Field.Label htmlFor="input-addon-21">Addon (block-end)</Field.Label>
        <InputGroup className="h-auto">
          <InputGroup.Input id="input-addon-21" />
          <InputGroup.Addon align="block-end">
            <InputGroup.Text>20/240 characters</InputGroup.Text>
            <IconInfoCircle className="text-muted-foreground ml-auto" />
          </InputGroup.Addon>
        </InputGroup>
      </Field>
      <Field>
        <Field.Label htmlFor="input-icon-both-10">Multiple Icons</Field.Label>
        <InputGroup>
          <InputGroup.Input id="input-icon-both-10" />
          <InputGroup.Addon align="inline-end">
            <IconStar />
            <InputGroup.Button onClick={() => toast.add({ description: "Copied to clipboard" })} size="icon-xs">
              <IconCopy />
            </InputGroup.Button>
          </InputGroup.Addon>
          <InputGroup.Addon>
            <IconRadio className="text-destructive animate-pulse" />
          </InputGroup.Addon>
        </InputGroup>
      </Field>
      <Field>
        <Field.Label htmlFor="input-description-10">Description</Field.Label>
        <InputGroup>
          <InputGroup.Input id="input-description-10" />
          <InputGroup.Addon align="inline-end">
            <IconInfoCircle />
          </InputGroup.Addon>
        </InputGroup>
        <Field.Description>This is a description of the input group.</Field.Description>
      </Field>
      <Field>
        <Field.Label htmlFor="input-label-10">Label</Field.Label>
        <InputGroup>
          <InputGroup.Addon>
            <Field.Label htmlFor="input-label-10">Label</Field.Label>
          </InputGroup.Addon>
          <InputGroup.Input id="input-label-10" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Input aria-label="Optional" id="input-optional-12" />
          <InputGroup.Addon align="inline-end">
            <InputGroup.Text>(optional)</InputGroup.Text>
          </InputGroup.Addon>
        </InputGroup>
      </Field>
    </Field.Set>
  )
}
