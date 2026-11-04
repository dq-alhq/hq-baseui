import { Kbd } from "@/components/ui/kbd"

export default () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-muted-foreground text-sm">
        Use{" "}
        <Kbd.Group>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </Kbd.Group>{" "}
        to open the command palette
      </p>
    </div>
  )
}
