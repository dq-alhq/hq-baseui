import { Button } from "@/components/ui/button"
import { Sheet } from "@/components/ui/sheet"

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

export default () => {
  return (
    <div className="flex flex-wrap gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <Sheet.Trigger render={<Button className="capitalize" variant="outline" />}>{side}</Sheet.Trigger>
          <Sheet.Content className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]" side={side}>
            <Sheet.Header>
              <Sheet.Title>Edit profile</Sheet.Title>
              <Sheet.Description>
                Make changes to your profile here. Click save when you&apos;re done.
              </Sheet.Description>
            </Sheet.Header>
            <Sheet.Body>
              {Array.from({ length: 10 }).map((_, index) => (
                <p className="mb-2 leading-relaxed" key={index}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              ))}
            </Sheet.Body>
            <Sheet.Footer>
              <Button type="submit">Save changes</Button>
              <Sheet.Close render={<Button variant="outline" />}>Cancel</Sheet.Close>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet>
      ))}
    </div>
  )
}
