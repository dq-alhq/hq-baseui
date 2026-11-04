import { IconArrowRight } from "@tabler/icons-react"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"
import { Pagination } from "@/components/ui/pagination"
import { Popover } from "@/components/ui/popover"
import { Select } from "@/components/ui/select"

export default () => {
  return (
    <div className="flex w-full flex-col items-center justify-between sm:flex-row">
      <div className="to-muted-foreground text-sm">Show 10 to 20 from 100 data</div>
      <div className="flex items-center gap-2">
        <Select aria-label="Show" defaultValue={10} name="Show">
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value={10}>10</Select.Item>
            <Select.Item value={20}>20</Select.Item>
            <Select.Item value={40}>40</Select.Item>
            <Select.Item value={100}>100</Select.Item>
          </Select.Content>
        </Select>
        <Pagination>
          <Pagination.First href="#" />
          <Pagination.Previous href="#" />
          <Pagination.Item href="#">1</Pagination.Item>
          <Pagination.Item isActive>2</Pagination.Item>
          <Pagination.Item href="#">3</Pagination.Item>
          <Popover>
            <Popover.Trigger render={<Pagination.Ellipsis />} />
            <Popover.Content side="top" sideOffset={12}>
              <Field>
                <Field.Label className="sr-only">Goto page</Field.Label>
                <InputGroup>
                  <InputGroup.Addon>
                    <InputGroup.Text>Goto page</InputGroup.Text>
                  </InputGroup.Addon>
                  <InputGroup.Input />
                  <InputGroup.Addon align="inline-end">
                    <InputGroup.Button variant="primary">
                      <IconArrowRight />
                    </InputGroup.Button>
                  </InputGroup.Addon>
                </InputGroup>
              </Field>
            </Popover.Content>
          </Popover>
          <Pagination.Item href="#">25</Pagination.Item>
          <Pagination.Next href="#" />
          <Pagination.Last href="#" />
        </Pagination>
      </div>
    </div>
  )
}
