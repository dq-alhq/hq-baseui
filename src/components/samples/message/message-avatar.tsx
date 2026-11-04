import { Avatar } from "@/components/ui/avatar"
import { Bubble } from "@/components/ui/bubble"
import { Message } from "@/components/ui/message"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 py-12">
      <Message>
        <Message.Avatar>
          <Avatar>
            <Avatar.Image alt="@avatar" src="/avatars/03.png" />
            <Avatar.Fallback>R</Avatar.Fallback>
          </Avatar>
        </Message.Avatar>
        <Message.Content>
          <Bubble variant="muted">
            <Bubble.Content>The build failed during dependency installation.</Bubble.Content>
          </Bubble>
        </Message.Content>
      </Message>
      <Message align="end">
        <Message.Avatar>
          <Avatar>
            <Avatar.Image alt="@avatar" src="/avatars/10.png" />
            <Avatar.Fallback>R</Avatar.Fallback>
          </Avatar>
        </Message.Avatar>
        <Message.Content>
          <Bubble>
            <Bubble.Content>Can you share the exact error?</Bubble.Content>
          </Bubble>
        </Message.Content>
      </Message>
      <Message>
        <Message.Avatar>
          <Avatar>
            <Avatar.Image alt="@avatar" src="/avatars/03.png" />
            <Avatar.Fallback>R</Avatar.Fallback>
          </Avatar>
        </Message.Avatar>
        <Message.Content>
          <Bubble.Group>
            <Bubble variant="muted">
              <Bubble.Content>Here&apos;s the error from the logs</Bubble.Content>
            </Bubble>
            <Bubble variant="muted">
              <Bubble.Content>
                Something went wrong with the build. The libraries are not installed correctly. Try running the build
                again.
              </Bubble.Content>
            </Bubble>
          </Bubble.Group>
        </Message.Content>
      </Message>
    </div>
  )
}
