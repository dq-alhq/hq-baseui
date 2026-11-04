"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import { applyStyle } from "@/lib/dom"

type FontStore = {
  fontSans: string
  fontMono: string
  setFontSans: (fontSans: string) => void
  setFontMono: (fontMono: string) => void
  reset: () => void
}

export const DEFAULT_FONT_SANS: string = "Geist Variable"
export const DEFAULT_FONT_MONO: string = "Geist Mono Variable"

export const useFontStore = create<FontStore>()(
  persist(
    (set) => ({
      fontSans: DEFAULT_FONT_SANS,
      fontMono: DEFAULT_FONT_MONO,
      setFontSans: (fontSans) => set({ fontSans }),
      setFontMono: (fontMono) => set({ fontMono }),
      reset: () => set({ fontMono: DEFAULT_FONT_MONO, fontSans: DEFAULT_FONT_SANS })
    }),
    {
      name: "font"
    }
  )
)

export const useFont = () => {
  const fontSans = useFontStore((s) => s.fontSans)
  const updateFontSans = useFontStore((s) => s.setFontSans)

  const setFontSans = (key: string) => {
    applyStyle("font-sans", `${key}, sans-serif`)
    updateFontSans(key)
  }

  const fontMono = useFontStore((s) => s.fontMono)
  const updateFontMono = useFontStore((s) => s.setFontMono)

  const setFontMono = (key: string) => {
    applyStyle("font-mono", `${key}, monospace`)
    updateFontMono(key)
  }

  const reset = useFontStore((s) => s.reset)
  return { fontSans, setFontSans, fontMono, setFontMono, reset }
}
