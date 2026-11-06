import { z } from "zod"
import { Combobox } from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { isFieldInvalid, useAppForm } from "@/components/ui/tanstack-form"
import { toast } from "@/components/ui/toast"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const

const schema = z.object({
  framework: z.string().min(1, "Please select a framework.")
})

type FormValues = z.infer<typeof schema>

export default () => {
  const form = useAppForm({
    defaultValues: { framework: "" } as FormValues,
    validators: { onChange: schema },
    onSubmit({ value }) {
      toast.add({ title: "You submitted:", description: JSON.stringify(value) })
    }
  })

  return (
    <Form
      className="max-w-xs"
      onSubmit={(event) => {
        event.preventDefault()
        form.handleSubmit()
      }}
    >
      <form.AppField name="framework">
        {(field) => (
          <Field invalid={isFieldInvalid(field)} name={field.name}>
            <Field.Label>Framework</Field.Label>
            <Combobox
              items={frameworks}
              name={field.name}
              onValueChange={(value) => field.handleChange((value as string | null) ?? "")}
              value={field.state.value || null}
            >
              <Combobox.Input
                aria-invalid={isFieldInvalid(field)}
                onBlur={field.handleBlur}
                placeholder="Select a framework"
              />
              <Combobox.Content>
                <Combobox.Empty>No items found.</Combobox.Empty>
                <Combobox.List>
                  {(item) => (
                    <Combobox.Item key={item} value={item}>
                      {item}
                    </Combobox.Item>
                  )}
                </Combobox.List>
              </Combobox.Content>
            </Combobox>
            <Field.Description>Choose the framework you use most.</Field.Description>
            <field.Message />
          </Field>
        )}
      </form.AppField>
      <form.AppForm>
        <form.Submit>Submit</form.Submit>
      </form.AppForm>
    </Form>
  )
}
