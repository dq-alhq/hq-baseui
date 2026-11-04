import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

export default () => {
  const countries = [
    { label: "United States", value: "us" },
    { label: "United Kingdom", value: "uk" },
    { label: "Canada", value: "ca" }
  ]
  return (
    <form className="w-full max-w-sm">
      <Field.Set>
        <Field>
          <Field.Label>Name</Field.Label>
          <Input placeholder="Evil Rabbit" required type="text" />
        </Field>
        <Field>
          <Field.Label>Email</Field.Label>
          <Input placeholder="john@example.com" type="email" />
          <Field.Description>We&apos;ll never share your email with anyone.</Field.Description>
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <Field.Label>Phone</Field.Label>
            <Input placeholder="+1 (555) 123-4567" type="tel" />
          </Field>
          <Field>
            <Field.Label htmlFor="form-country">Country</Field.Label>
            <Select defaultValue="us" items={countries}>
              <Select.Trigger id="form-country">
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  {countries.map((country) => (
                    <Select.Item key={country.value} value={country.value}>
                      {country.label}
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Content>
            </Select>
          </Field>
        </div>
        <Field>
          <Field.Label>Address</Field.Label>
          <Input placeholder="123 Main St" type="text" />
        </Field>
        <Field.Footer>
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </Field.Footer>
      </Field.Set>
    </form>
  )
}
