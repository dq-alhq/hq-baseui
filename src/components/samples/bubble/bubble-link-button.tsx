"use client"

import { Bubble } from "@/components/ui/bubble"
import { toast } from "@/components/ui/toast"

export default () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Bubble variant="muted">
        <Bubble.Content>How can I help you today?</Bubble.Content>
      </Bubble>
      <Bubble.Group>
        <Bubble align="end" variant="tinted">
          <Bubble.Content
            render={<button onClick={() => toast.add({ description: "You clicked forgot password" })} type="button" />}
          >
            I forgot my password
          </Bubble.Content>
        </Bubble>
        <Bubble align="end" variant="tinted">
          <Bubble.Content
            render={
              <button onClick={() => toast.add({ description: "You clicked help with subscription" })} type="button" />
            }
          >
            I need help with my subscription
          </Bubble.Content>
        </Bubble>
        <Bubble align="end" variant="tinted">
          <Bubble.Content
            render={
              <button
                onClick={() => toast.add({ description: "You clicked something else. Talk to a human." })}
                type="button"
              />
            }
          >
            Something else. Talk to a human.
          </Bubble.Content>
        </Bubble>
      </Bubble.Group>
    </div>
  )
}
