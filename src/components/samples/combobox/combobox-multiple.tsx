import { Fragment } from "react/jsx-runtime"
import { Combobox, useComboboxAnchor } from "@/components/ui/combobox"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const

export default () => {
  const anchor = useComboboxAnchor()

  return (
    <Combobox autoHighlight defaultValue={[frameworks[0]]} items={frameworks} multiple>
      <Combobox.Chips className="w-full max-w-xs" ref={anchor}>
        <Combobox.Value>
          {(values) => (
            <Fragment>
              {values.map((value: string) => (
                <Combobox.Chip key={value}>{value}</Combobox.Chip>
              ))}
              <Combobox.ChipsInput />
            </Fragment>
          )}
        </Combobox.Value>
      </Combobox.Chips>
      <Combobox.Content anchor={anchor}>
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
  )
}
