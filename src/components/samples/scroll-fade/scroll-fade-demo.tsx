export default () => {
  return (
    <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border">
      <div className="scroll-fade h-72 scrollbar-none overflow-y-auto">
        <div className="flex flex-col gap-1.5 p-1.5">
          {Array.from({ length: 12 }, (_, index) => (
            <div className="bg-muted rounded-lg px-3 py-2.5 text-sm" key={index}>
              Item {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
