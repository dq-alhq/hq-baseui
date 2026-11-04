import { buttonVariants } from "@/components/ui/button"

export default function ButtonRender() {
  return (
    <a className={buttonVariants({ variant: "secondary", size: "sm" })} href="#">
      Login
    </a>
  )
}
