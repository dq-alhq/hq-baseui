import { Resizable } from "@/components/ui/resizable"

export default () => {
  return (
    <Resizable className="max-w-sm rounded-lg border" orientation="horizontal">
      <Resizable.Content defaultSize="50%">
        <div className="flex h-50 items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </Resizable.Content>
      <Resizable.Separator />
      <Resizable.Content defaultSize="50%">
        <Resizable orientation="vertical">
          <Resizable.Content defaultSize="25%">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </Resizable.Content>
          <Resizable.Separator />
          <Resizable.Content defaultSize="75%">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </Resizable.Content>
        </Resizable>
      </Resizable.Content>
    </Resizable>
  )
}
