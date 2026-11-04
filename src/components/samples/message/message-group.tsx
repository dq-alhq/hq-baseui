import { Avatar } from "@/components/ui/avatar"
import { Bubble } from "@/components/ui/bubble"
import { Message } from "@/components/ui/message"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 py-12">
      <Message.Group>
        <Message>
          <Message.Avatar />
          <Message.Content>
            <Bubble variant="muted">
              <Bubble.Content>I checked the registry addresses.</Bubble.Content>
            </Bubble>
          </Message.Content>
        </Message>
        <Message>
          <Message.Avatar>
            <Avatar>
              <Avatar.Image alt="@avatar" src="/avatars/02.png" />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar>
          </Message.Avatar>
          <Message.Content>
            <Bubble variant="muted">
              <Bubble.Content>The component and example JSON now live under the UI registry.</Bubble.Content>
            </Bubble>
          </Message.Content>
        </Message>
      </Message.Group>
    </div>
  )
}
