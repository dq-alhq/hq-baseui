import { InputGroup } from "@/components/ui/input-group"
import { Spinner } from "@/components/ui/spinner"

export default () => {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroup.Input placeholder="Searching..." />
        <InputGroup.Addon align="inline-end">
          <Spinner />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Processing..." />
        <InputGroup.Addon>
          <Spinner />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Saving changes..." />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Text>Saving...</InputGroup.Text>
          <Spinner />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Refreshing data..." />
        <InputGroup.Addon>
          <Spinner />
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">
          <InputGroup.Text className="text-muted-foreground">Please wait...</InputGroup.Text>
        </InputGroup.Addon>
      </InputGroup>
    </div>
  )
}
