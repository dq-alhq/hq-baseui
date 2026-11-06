import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Combobox } from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { toast } from "@/components/ui/toast"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const

const schema = z.object({
  framework: z.string().min(1, "Please select a framework.")
})

type FormValues = z.infer<typeof schema>

export default () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { framework: "" }
  })

  const onSubmit = (data: FormValues) => {
    toast.add({ title: "You submitted:", description: JSON.stringify(data) })
  }

  return (
    <Form className="max-w-xs" onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        control={form.control}
        name="framework"
        render={({ field, fieldState }) => (
          <Field invalid={fieldState.invalid} name={field.name}>
            <Field.Label>Framework</Field.Label>
            <Combobox
              items={frameworks}
              name={field.name}
              onValueChange={(value) => field.onChange((value as string | null) ?? "")}
              value={field.value || null}
            >
              <Combobox.Input
                aria-invalid={fieldState.invalid}
                onBlur={field.onBlur}
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
            <Field.Error match={fieldState.invalid}>{fieldState.error?.message}</Field.Error>
          </Field>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
