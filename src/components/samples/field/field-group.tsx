import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"
import { Separator } from "@/components/ui/separator"

export default () => {
  return (
    <Field.Group className="w-full max-w-xs">
      <Field.Set>
        <Field.Legend description="Get notified when ChatGPT responds to requests that take time, like research or image generation.">
          Responses
        </Field.Legend>
        <Field>
          <Checkbox defaultChecked disabled />
          <Field.Label>Push notifications</Field.Label>
        </Field>
      </Field.Set>
      <Separator />
      <Field.Set>
        <Field.Legend
          description={
            <>
              Get notified when tasks you&apos;ve created have updates.{" "}
              <a className="underline" href="#">
                Manage tasks
              </a>
            </>
          }
        >
          Tasks
        </Field.Legend>
        <Field>
          <Checkbox />
          <Field.Label className="font-normal">Push notifications</Field.Label>
        </Field>
        <Field>
          <Checkbox />
          <Field.Label className="font-normal">Email notifications</Field.Label>
        </Field>
      </Field.Set>
    </Field.Group>
  )
}
