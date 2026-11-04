import { Avatar } from "@/components/ui/avatar"
import { Bubble } from "@/components/ui/bubble"
import { Marker } from "@/components/ui/marker"
import { Message } from "@/components/ui/message"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 py-12">
      <Message align="end">
        <Message.Avatar>
          <Avatar>
            <Avatar.Image alt="@me" src="/avatars/10.png" />
            <Avatar.Fallback>ME</Avatar.Fallback>
          </Avatar>
        </Message.Avatar>
        <Message.Content>
          <Bubble>
            <Bubble.Content>Deploying to prod real quick.</Bubble.Content>
          </Bubble>
        </Message.Content>
      </Message>
      <Message>
        <Message.Avatar>
          <Avatar>
            <Avatar.Image alt="@rabbit" src="/avatars/02.png" />
            <Avatar.Fallback>R</Avatar.Fallback>
          </Avatar>
        </Message.Avatar>
        <Message.Content>
          <Bubble variant="muted">
            <Bubble.Content>It&apos;s 4:55 PM. On a Friday.</Bubble.Content>
          </Bubble>
        </Message.Content>
      </Message>
      <Message align="end">
        <Message.Avatar>
          <Avatar>
            <Avatar.Image alt="@me" src="/avatars/10.png" />
            <Avatar.Fallback>ME</Avatar.Fallback>
          </Avatar>
        </Message.Avatar>
        <Message.Content>
          <Bubble>
            <Bubble.Content>It&apos;s a one-line change.</Bubble.Content>
          </Bubble>
          <Message.Footer>Delivered</Message.Footer>
        </Message.Content>
      </Message>
      <Message>
        <Message.Avatar>
          <Avatar>
            <Avatar.Image alt="@rabbit" src="/avatars/02.png" />
            <Avatar.Fallback>R</Avatar.Fallback>
          </Avatar>
        </Message.Avatar>
        <Message.Content>
          <Bubble.Group>
            <Bubble variant="muted">
              <Bubble.Content>It&apos;s always a one-line change 😭.</Bubble.Content>
            </Bubble>
            <Bubble variant="muted">
              <Bubble.Content>Alright, let me take a look.</Bubble.Content>
              <Bubble.Reactions aria-label="Reactions: thumbs up">
                <span>👍</span>
              </Bubble.Reactions>
            </Bubble>
          </Bubble.Group>
        </Message.Content>
      </Message>
      <Marker role="status">
        <Marker.Content className="shimmer">
          <span className="font-medium">Oliver</span> is typing...
        </Marker.Content>
      </Marker>
    </div>
  )
}
