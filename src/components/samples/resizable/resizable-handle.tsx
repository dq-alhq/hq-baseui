import { Resizable } from "@/components/ui/resizable"

export default () => {
  return (
    <Resizable className="min-h-50 max-w-sm rounded-lg border" orientation="horizontal">
      <Resizable.Content defaultSize="25%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </Resizable.Content>
      <Resizable.Separator withHandle={false} />
      <Resizable.Content defaultSize="75%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </Resizable.Content>
    </Resizable>
  )
}
