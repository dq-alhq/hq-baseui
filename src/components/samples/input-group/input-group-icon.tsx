import { IconCheck, IconCreditCard, IconInfoCircle, IconMail, IconSearch, IconStar } from "@tabler/icons-react"
import { InputGroup } from "@/components/ui/input-group"

export default () => {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon>
          <IconSearch />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Enter your email" type="email" />
        <InputGroup.Addon>
          <IconMail />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Card number" />
        <InputGroup.Addon>
          <IconCreditCard />
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">
          <IconCheck />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Card number" />
        <InputGroup.Addon align="inline-end">
          <IconStar />
          <IconInfoCircle />
        </InputGroup.Addon>
      </InputGroup>
    </div>
  )
}
