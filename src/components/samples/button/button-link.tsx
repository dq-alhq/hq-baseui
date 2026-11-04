import { IconBrandGithub } from "@tabler/icons-react"
import { buttonVariants } from "@/components/ui/button"

export default () => {
  return (
    <a className={buttonVariants()} href="https://github.com/hq-kit/ui">
      <IconBrandGithub /> Github
    </a>
  )
}
