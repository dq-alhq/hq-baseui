import type { ComponentPropsWithRef } from "react"

export function TypographyH1(props: ComponentPropsWithRef<"h1">) {
  return <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance" {...props} />
}

export function TypographyH2(props: ComponentPropsWithRef<"h2">) {
  return <h2 className="my-6 scroll-m-20 text-2xl font-semibold tracking-tight" {...props} />
}

export function TypographyH3(props: ComponentPropsWithRef<"h3">) {
  return <h3 className="mt-6 mb-2 scroll-m-20 text-xl font-semibold tracking-tight" {...props} />
}

export function TypographyH4(props: ComponentPropsWithRef<"h4">) {
  return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" {...props} />
}

export function TypographyP(props: ComponentPropsWithRef<"p">) {
  return <p className="text-foreground/80 leading-relaxed not-first:mt-6" {...props} />
}

export function TypographyBlockquote(props: ComponentPropsWithRef<"blockquote">) {
  return <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />
}

export function TypographyUl(props: ComponentPropsWithRef<"ul">) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
}

export function TypographyOl(props: ComponentPropsWithRef<"ol">) {
  return <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />
}

export function TypographyTable(props: ComponentPropsWithRef<"table">) {
  return <table className="my-6 w-full" {...props} />
}

export function TypographyTr(props: ComponentPropsWithRef<"tr">) {
  return <tr className="border-t" {...props} />
}

export function TypographyTh(props: ComponentPropsWithRef<"th">) {
  return <th className="border px-4 py-2" {...props} />
}

export function TypographyTd(props: ComponentPropsWithRef<"td">) {
  return <td className="border px-4 py-2" {...props} />
}

export function TypographyCode(props: ComponentPropsWithRef<"code">) {
  return (
    <code className="bg-secondary text-secondary-foreground relative rounded p-[0.2rem] font-mono text-sm" {...props} />
  )
}

export function TypographySmall(props: ComponentPropsWithRef<"small">) {
  return <small className="text-sm" {...props} />
}

export function TypographyA(props: ComponentPropsWithRef<"a">) {
  return <a className="hover:text-primary font-medium underline underline-offset-4" {...props} />
}
