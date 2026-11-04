import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default () => {
  return (
    <Field>
      <Field.Label htmlFor="input-demo-api-key">API Key</Field.Label>
      <Input placeholder="sk-..." type="password" />
      <Field.Description>Your API key is encrypted and stored securely.</Field.Description>
    </Field>
  )
}
