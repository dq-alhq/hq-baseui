import { Accordion } from "@/components/ui/accordion"

export default () => {
  return (
    <Accordion className="w-full">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Can I access my account history?</Accordion.Trigger>
        <Accordion.Content>
          Yes, you can view your complete account history including all transactions, plan changes, and support tickets
          in the Account History section of your dashboard.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item disabled value="item-2">
        <Accordion.Trigger>Premium feature information</Accordion.Trigger>
        <Accordion.Content>
          This section contains information about premium features. Upgrade your plan to access this content.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>How do I update my email address?</Accordion.Trigger>
        <Accordion.Content>
          You can update your email address in your account settings. You&apos;ll receive a verification email at your
          new address to confirm the change.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
}
