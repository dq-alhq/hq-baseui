import { IconSelector } from "@tabler/icons-react"
import { Combobox } from "@/components/ui/combobox"
import { fontMono, fontSans, fontSerif } from "@/lib/fonts"
import { useFont } from "@/stores/font-store"
import { Button } from "../ui/button"
import { Field } from "../ui/field"

const FONT_SANS = fontSans.map((font) => ({ value: `'${font}', sans-serif`, label: font }))
const FONT_SERIF = fontSerif.map((font) => ({ value: `'${font}', serif`, label: font }))
const FONT_MONO = fontMono.map((font) => ({ value: `'${font}', monospace`, label: font }))

export function FontSansSelector() {
  const { fontSans: selectedFont, setFontSans: onFontChange } = useFont()

  const grouped = [
    { value: "Sans Serif", items: FONT_SANS },
    { value: "Serif", items: FONT_SERIF },
    { value: "Monospace", items: FONT_MONO }
  ]

  const handleValueChange = (value: string | null) => {
    if (!value) return
    const font = grouped.flatMap((g) => g.items).find((f) => f.label === value)?.label
    const fontName = font ? font : value
    onFontChange(fontName)
  }

  return (
    <Field>
      <Combobox items={grouped} onValueChange={(v) => v && handleValueChange(v as string)} value={selectedFont}>
        <Field.Label>Font Sans</Field.Label>
        <Combobox.Trigger
          render={
            <Button className="w-full justify-between" variant="outline">
              <Combobox.Value />
              <IconSelector />
            </Button>
          }
        />
        <Combobox.Content>
          <Combobox.Input placeholder="Search" showTrigger={false} />
          <Combobox.Empty>No items found.</Combobox.Empty>
          <Combobox.List>
            {(group) => (
              <Combobox.Group items={group.items} key={group.value}>
                <Combobox.Label>{group.value}</Combobox.Label>
                <Combobox.Collection>
                  {(item) => (
                    <Combobox.Item key={item.label} style={{ fontFamily: item.value }} value={item.label}>
                      {item.label}
                    </Combobox.Item>
                  )}
                </Combobox.Collection>
              </Combobox.Group>
            )}
          </Combobox.List>
        </Combobox.Content>
      </Combobox>
    </Field>
  )
}

export function FontMonoSelector() {
  const { fontMono: selectedFont, setFontMono: onFontChange } = useFont()
  const handleValueChange = (value: string | null) => {
    if (!value) return

    const font = fontMono.find((f) => f === value)
    const fontName = font ? font : value
    onFontChange(fontName)
  }

  return (
    <Field>
      <Combobox items={FONT_MONO} onValueChange={(v) => v && handleValueChange(v as string)} value={selectedFont}>
        <Field.Label>Font Mono</Field.Label>
        <Combobox.Trigger
          render={
            <Button className="w-full justify-between" variant="outline">
              <Combobox.Value />
              <IconSelector />
            </Button>
          }
        />
        <Combobox.Content>
          <Combobox.Input placeholder="Search" showTrigger={false} />
          <Combobox.Empty>No items found.</Combobox.Empty>
          <Combobox.List>
            {(font) => (
              <Combobox.Item itemID={font.label} key={font.label} style={{ fontFamily: font.value }} value={font.label}>
                {font.label}
              </Combobox.Item>
            )}
          </Combobox.List>
        </Combobox.Content>
      </Combobox>
    </Field>
  )
}
