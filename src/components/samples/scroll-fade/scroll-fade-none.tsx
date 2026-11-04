export default () => {
  return (
    <div className="mx-auto flex max-w-xs min-w-0 flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-2xl border">
          <div className="scroll-fade h-48 scrollbar-none overflow-y-auto">
            <ScrollFadeNoneItems />
          </div>
        </div>
        <p className="text-muted-foreground text-center font-mono text-xs">scroll-fade</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-2xl border">
          <div className="scroll-fade scroll-fade-none h-48 scrollbar-none overflow-y-auto">
            <ScrollFadeNoneItems />
          </div>
        </div>
        <p className="text-muted-foreground text-center font-mono text-xs">scroll-fade scroll-fade-none</p>
      </div>
    </div>
  )
}

function ScrollFadeNoneItems() {
  return (
    <div className="flex flex-col gap-1.5 p-1.5">
      {Array.from({ length: 8 }, (_, index) => (
        <div className="bg-muted rounded-lg px-3 py-2.5 text-sm" key={index}>
          Item {index + 1}
        </div>
      ))}
    </div>
  )
}
