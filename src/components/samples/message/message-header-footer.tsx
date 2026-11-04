import { Bubble } from "@/components/ui/bubble"
import { Message } from "@/components/ui/message"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Message>
        <Message.Content>
          <Message.Header>Olivia</Message.Header>
          <Bubble variant="muted">
            <Bubble.Content>I already checked the logs.</Bubble.Content>
          </Bubble>
        </Message.Content>
      </Message>
      <Message align="end">
        <Message.Content>
          <Bubble>
            <Bubble.Content>Send the report to the team. Ping @shadcn if you need help.</Bubble.Content>
          </Bubble>
          <Message.Footer>
            <div>
              Read <span className="font-normal">Yesterday</span>
            </div>
          </Message.Footer>
        </Message.Content>
      </Message>
    </div>
  )
}
