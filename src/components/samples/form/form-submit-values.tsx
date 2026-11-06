import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/toast"

export default () => {
  return (
    <Form
      className="max-w-xs"
      onFormSubmit={(formValues) => {
        const payload = {
          product_id: formValues.id,
          order_quantity: Number(formValues.quantity)
        }

        toast.add({ title: "Payload", description: JSON.stringify(payload) })
      }}
    >
      <Field name="id">
        <Field.Label>Product ID</Field.Label>
        <Input defaultValue="sku-1024" required />
      </Field>
      <Field name="quantity">
        <Field.Label>Quantity</Field.Label>
        <Input defaultValue="1" min={1} required type="number" />
      </Field>
      <Button type="submit">Order</Button>
    </Form>
  )
}
