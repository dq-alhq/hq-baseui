import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"

export default () => {
  return (
    <Field.Set>
      <Field.Legend>Show these items on the desktop:</Field.Legend>
      <p className="text-muted-foreground text-sm">Select the items you want to show on the desktop.</p>
      <Field>
        <Checkbox
          defaultChecked
          id="finder-pref-9k2-hard-disks-ljj-checkbox"
          name="finder-pref-9k2-hard-disks-ljj-checkbox"
        />
        <Field.Label>Hard disks</Field.Label>
      </Field>
      <Field>
        <Checkbox
          defaultChecked
          id="finder-pref-9k2-external-disks-1yg-checkbox"
          name="finder-pref-9k2-external-disks-1yg-checkbox"
        />
        <Field.Label>External disks</Field.Label>
      </Field>
      <Field>
        <Checkbox id="finder-pref-9k2-cds-dvds-fzt-checkbox" name="finder-pref-9k2-cds-dvds-fzt-checkbox" />
        <Field.Label>CDs, DVDs, and iPods</Field.Label>
      </Field>
      <Field>
        <Checkbox
          id="finder-pref-9k2-connected-servers-6l2-checkbox"
          name="finder-pref-9k2-connected-servers-6l2-checkbox"
        />
        <Field.Label>Connected servers</Field.Label>
      </Field>
    </Field.Set>
  )
}
