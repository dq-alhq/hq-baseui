import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrandGithub,
  IconCheck,
  IconCode,
  IconCommand,
  IconKeyboard,
  IconLayersIntersect,
  IconPalette,
  IconSparkles
} from "@tabler/icons-react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { IconApp } from "#/components/icons"
import { Badge } from "#/components/ui/badge"
import { Button, buttonVariants } from "#/components/ui/button"
import { Input } from "#/components/ui/input"
import { Tabs } from "#/components/ui/tabs"
import { siteConfig } from "#/config/site"

export const Route = createFileRoute("/_app/")({ component: App })

const docParams = { _splat: "getting-started/introduction" }

const principles = [
  {
    icon: IconKeyboard,
    title: "Accessible at the core",
    description: "Keyboard interactions, focus states, and semantics come from Base UI primitives."
  },
  {
    icon: IconPalette,
    title: "Make it feel like yours",
    description: "Theme tokens and familiar Tailwind classes keep every detail in your hands."
  },
  {
    icon: IconLayersIntersect,
    title: "Built for real interfaces",
    description: "Start with the essentials, then reach for richer patterns as your product grows."
  }
]

const componentGroups = [
  {
    number: "01",
    title: "Everyday essentials",
    description: "The building blocks you reach for in nearly every product.",
    items: ["Button", "Input", "Checkbox", "Select", "Switch", "Tooltip"]
  },
  {
    number: "02",
    title: "Rich interactions",
    description: "Accessible patterns for navigation, choices, and layered content.",
    items: ["Dialog", "Popover", "Combobox", "Command", "Date picker", "Tabs"]
  },
  {
    number: "03",
    title: "Polished details",
    description: "Small touches that make an interface feel considered and complete.",
    items: ["Avatar", "Badge", "Toast", "Progress", "Accordion", "Pagination"]
  }
]

const steps = [
  {
    number: "01",
    title: "Find a starting point",
    description: "Explore the component docs and choose a pattern for your interface.",
    href: "/docs/$",
    link: "Browse the docs"
  },
  {
    number: "02",
    title: "Make it yours",
    description: "Use theme variables and Tailwind classes to match your product.",
    href: "/themes",
    link: "Explore themes"
  },
  {
    number: "03",
    title: "Ship with confidence",
    description: "Build on accessible primitives and keep the code in your hands.",
    href: "/docs/$",
    link: "Read the introduction"
  }
]

function App() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate">
        <div
          aria-hidden="true"
          className="bg-primary/10 pointer-events-none absolute -top-32 right-[-12%] -z-10 size-136 rounded-full blur-[100px]"
        />
        <div className="relative container grid min-h-[calc(100svh-3.5rem)] items-center gap-14 border-x py-16 sm:py-20 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <Badge className="mb-7 gap-2 px-3 py-1.5" variant="outline">
              <span className="bg-primary size-1.5 rounded-full" />A component library for the curious
              <IconArrowUpRight aria-hidden="true" className="size-3.5" />
            </Badge>
            <h1 className="max-w-xl text-5xl leading-[1.04] font-semibold tracking-[-0.06em] text-balance sm:text-6xl lg:text-[4.5rem]">
              Build interfaces
              <br />
              that feel like <span className="text-primary">you.</span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-lg text-base leading-7 text-pretty sm:text-lg sm:leading-8">
              A thoughtfully crafted collection of React components built on Base UI. Accessible by default,
              customizable by design, and ready for whatever you imagine.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link className={`${buttonVariants({ size: "lg" })} rounded-lg`} params={docParams} to="/docs/$">
                Get started <IconArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link className={`${buttonVariants({ size: "lg", variant: "outline" })} rounded-lg`} to="/themes">
                Explore themes
              </Link>
            </div>
            <div className="text-muted-foreground mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium">
              {["Open source", "Keyboard accessible", "Your code, your rules"].map((item) => (
                <span className="inline-flex items-center gap-1.5" key={item}>
                  <IconCheck aria-hidden="true" className="text-primary size-3.5" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-136 lg:ml-auto">
            <div
              aria-hidden="true"
              className="from-primary/15 to-muted/70 absolute -inset-5 -z-10 rounded-3xl bg-linear-to-br via-transparent blur-2xl"
            />
            <div className="bg-card shadow-foreground/5 overflow-hidden rounded-2xl border shadow-2xl">
              <div className="flex h-12 items-center justify-between border-b px-4">
                <div aria-hidden="true" className="flex items-center gap-1.5">
                  <span className="bg-muted-foreground/30 size-2 rounded-full" />
                  <span className="bg-muted-foreground/30 size-2 rounded-full" />
                  <span className="bg-muted-foreground/30 size-2 rounded-full" />
                </div>
                <div className="text-muted-foreground flex items-center gap-1.5 text-[11px]">
                  <IconApp className="size-3.5" />
                  <span>HQ Base UI</span>
                  <span className="text-muted-foreground/50">/</span>
                  <span>component preview</span>
                </div>
                <IconCommand aria-hidden="true" className="text-muted-foreground size-4" />
              </div>
              <div className="p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-xs font-medium">A small preview</p>
                    <h2 className="mt-1 text-sm font-semibold">Components, in their element</h2>
                  </div>
                  <Badge variant="secondary">Live demo</Badge>
                </div>
                <Tabs className="gap-3" defaultValue="preview">
                  <Tabs.List className="w-full">
                    <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                    <Tabs.Trigger value="code">Code</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Contents className="min-h-72">
                    <Tabs.Content className="min-h-72" value="preview">
                      <div className="bg-muted/60 flex min-h-72 w-full items-center justify-center rounded-xl p-4 sm:p-6">
                        <div className="bg-card w-full max-w-84 rounded-xl border p-5 shadow-sm">
                          <div className="mb-5 flex items-start justify-between">
                            <div>
                              <div className="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-lg">
                                <IconSparkles aria-hidden="true" className="size-4.5" />
                              </div>
                              <h3 className="mt-3 text-sm font-semibold">Invite your team</h3>
                              <p className="text-muted-foreground mt-1 text-xs leading-5">
                                Bring your favorite people along.
                              </p>
                            </div>
                            <Badge variant="secondary">2 of 5</Badge>
                          </div>
                          <label className="mb-1.5 block text-xs font-medium" htmlFor="invite-email">
                            Email address
                          </label>
                          <Input
                            className="bg-background h-9 text-sm"
                            id="invite-email"
                            placeholder="alex@company.com"
                            type="email"
                          />
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-muted-foreground text-xs">No spam, ever.</span>
                            <Button className="h-8 rounded-lg px-3 text-xs" size="sm">
                              Send invite
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Tabs.Content>
                    <Tabs.Content className="min-h-72" value="code">
                      <div className="bg-muted text-foreground flex min-h-72 w-full flex-col justify-between rounded-xl p-5">
                        <div className="text-muted-foreground mb-4 flex items-center gap-2 text-xs">
                          <IconCode aria-hidden="true" className="size-4" />
                          invite-card.tsx
                        </div>
                        <pre className="overflow-x-auto text-xs leading-6 sm:text-[13px]">
                          <code>
                            <span className="text-primary">import</span>
                            {" { Button, Input } "}
                            <span className="text-primary">from</span>{" "}
                            <span className="text-muted-foreground">{'"@/components/ui"'}</span>
                            {"\n\n"}
                            <span className="text-primary">export function</span>
                            {" InviteCard() {\n  "}
                            <span className="text-primary">return</span>
                            {" (\n    <form>\n      <Input type="}
                            <span className="text-muted-foreground">{'"email"'}</span>
                            {" />\n      <Button>Send invite</Button>\n    </form>\n  )\n}"}
                          </code>
                        </pre>
                        <p className="text-muted-foreground mt-4 text-[11px]">
                          Accessible primitives. Yours to make your own.
                        </p>
                      </div>
                    </Tabs.Content>
                  </Tabs.Contents>
                </Tabs>
              </div>
            </div>
            <div className="bg-card absolute -bottom-5 -left-5 hidden items-center gap-2.5 rounded-xl border px-3.5 py-3 shadow-lg sm:flex">
              <span className="bg-primary/10 text-primary flex size-8 items-center justify-center rounded-lg">
                <IconCheck aria-hidden="true" className="size-4" />
              </span>
              <span>
                <span className="block text-xs font-semibold">Accessible by default</span>
                <span className="text-muted-foreground mt-0.5 block text-[10px]">Built on Base UI</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Built with" className="bg-muted/30">
        <div className="container flex flex-col items-center justify-between gap-5 border py-6 sm:flex-row">
          <p className="text-muted-foreground text-xs font-medium">Made for the tools you already love</p>
          <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-semibold tracking-tight">
            <span>React</span>
            <span aria-hidden="true" className="text-border">
              /
            </span>
            <span>Base UI</span>
            <span aria-hidden="true" className="text-border">
              /
            </span>
            <span>Tailwind CSS</span>
            <span aria-hidden="true" className="text-border">
              /
            </span>
            <span>TypeScript</span>
          </div>
        </div>
      </section>

      <section className="container border-x py-20 sm:py-28" id="why-hq">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4" variant="outline">
            <IconSparkles aria-hidden="true" />A library that gets out of your way
          </Badge>
          <h2 className="text-3xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl">
            A good foundation changes everything.
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-sm leading-7 text-pretty sm:text-base">
            Skip the repetitive setup. Start with thoughtful patterns, then make every detail your own.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon

            return (
              <article
                className="bg-card hover:bg-accent/40 rounded-2xl border p-6 transition-colors"
                key={principle.title}
              >
                <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-lg">
                  <Icon aria-hidden="true" className="size-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight">{principle.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-6">{principle.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-muted/30" id="components">
        <div className="container border py-20 sm:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <Badge className="mb-4" variant="outline">
                Made to work together
              </Badge>
              <h2 className="text-3xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl">
                Start small. Build something bigger.
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-7 sm:text-base">
                From everyday controls to complete interaction patterns, find a solid starting point for your next idea.
              </p>
            </div>
            <Link
              className={`${buttonVariants({ variant: "outline" })} w-fit rounded-lg`}
              params={docParams}
              to="/docs/$"
            >
              All components <IconArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {componentGroups.map((group) => (
              <article className="bg-card rounded-2xl border p-6" key={group.number}>
                <span className="text-muted-foreground text-xs font-medium tracking-wide">{group.number}</span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{group.title}</h3>
                <p className="text-muted-foreground mt-2 min-h-12 text-sm leading-6">{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      className="bg-muted/50 text-muted-foreground rounded-md border px-2.5 py-1 text-[11px] font-medium"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container border-x py-20 sm:py-28" id="getting-started">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4" variant="outline">
            Your next step is simple
          </Badge>
          <h2 className="text-3xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl">
            From first look to first build.
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-sm leading-7 sm:text-base">
            Find what you need, shape the details, and bring your own ideas to life.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article className="bg-card rounded-2xl border p-6" key={step.number}>
              <span className="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-full text-sm font-semibold">
                {step.number}
              </span>
              <h3 className="mt-5 text-base font-semibold">{step.title}</h3>
              <p className="text-muted-foreground mt-2 min-h-12 text-sm leading-6">{step.description}</p>
              <Link
                className="text-primary hover:text-primary/80 mt-5 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                params={docParams}
                to={step.href}
              >
                {step.link} <IconArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container border-x pb-20 sm:pb-28">
        <div className="bg-primary text-primary-foreground relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10 sm:py-12">
          <div
            aria-hidden="true"
            className="bg-primary-foreground/10 absolute -top-32 -right-20 size-80 rounded-full blur-[80px]"
          />
          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <div className="bg-primary-foreground/10 mb-4 flex size-10 items-center justify-center rounded-lg">
                <IconCode aria-hidden="true" className="size-5" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-balance sm:text-3xl">
                Start with a component.
                <br className="hidden sm:block" /> Make it your own.
              </h2>
              <p className="text-primary-foreground/75 mt-3 max-w-lg text-sm leading-6">
                Browse the docs, pick a starting point, and build something that could only come from you.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                className={`${buttonVariants({ size: "lg", variant: "secondary" })} bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-10 rounded-lg px-4`}
                params={docParams}
                to="/docs/$"
              >
                Browse the docs <IconArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <a
                className="border-primary-foreground/30 hover:bg-primary-foreground/10 inline-flex h-10 items-center gap-2 rounded-lg border px-4 text-sm font-medium transition-colors"
                href={siteConfig.links.github}
                rel="noreferrer"
                target="_blank"
              >
                <IconBrandGithub aria-hidden="true" className="size-4" /> GitHub
                <IconArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="container border-x border-t">
        <div className="text-muted-foreground container flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <Link className="text-foreground inline-flex items-center gap-2 font-medium" to="/">
            <IconApp className="size-4" />
            HQ Base UI
          </Link>
          <span>Open source components, made for what comes next.</span>
          <a
            className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
            href={siteConfig.links.github}
            rel="noreferrer"
            target="_blank"
          >
            View on GitHub <IconArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </footer>
    </main>
  )
}
