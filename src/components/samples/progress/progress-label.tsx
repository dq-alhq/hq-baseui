import { Progress, ProgressValue } from "@/components/ui/progress"

export default () => {
  return (
    <Progress className="w-full max-w-sm" value={56}>
      <Progress.Label>Upload progress</Progress.Label>
      <ProgressValue />
    </Progress>
  )
}
