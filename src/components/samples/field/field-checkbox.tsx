import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"

export default () => {
  return (
    <Field.Group className="w-full max-w-sm">
      <Field.Set>
        <Field.Legend description="Select the items you want to show on the desktop.">
          Show these items on the desktop
        </Field.Legend>
        <div className="space-y-3">
          <Field>
            <Checkbox />
            <Field.Label>Hard disks</Field.Label>
          </Field>
          <Field>
            <Checkbox />
            <Field.Label>External disks</Field.Label>
          </Field>
          <Field>
            <Checkbox />
            <Field.Label>CDs, DVDs, and iPods</Field.Label>
          </Field>
          <Field>
            <Checkbox />
            <Field.Label>Connected servers</Field.Label>
          </Field>
        </div>
      </Field.Set>
      <Field.Separator />
      <Field>
        <Checkbox defaultChecked />
        <Field.Label>Sync Desktop & Documents folders</Field.Label>
        <Field.Description>
          Your Desktop & Documents folders are being synced with iCloud Drive. You can access them from other devices.
        </Field.Description>
      </Field>
    </Field.Group>
  )
}
