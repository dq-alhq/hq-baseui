"use client"

import { InputGroup } from "@/components/ui/input-group"

export default () => {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <textarea
          className="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
          data-slot="input-group-control"
          placeholder="Autoresize textarea..."
        />
        <InputGroup.Addon align="block-end">
          <InputGroup.Button className="ml-auto" size="sm" variant="primary">
            Submit
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
    </div>
  )
}
