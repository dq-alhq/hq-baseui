export const fontSans = [
  "ABeeZee",
  "Acme",
  "Alatsi",
  "Barlow",
  "Basic",
  "Comfortaa",
  "DM Sans",
  "Exo 2",
  "Figtree",
  "Fira Sans",
  "Geist",
  "Google Sans",
  "IBM Plex Sans",
  "Instrument Sans",
  "Inter",
  "Lato",
  "Lora",
  "Manrope",
  "Montserrat",
  "Noto Sans",
  "Nunito",
  "Open Sans",
  "Outfit",
  "Overpass",
  "Oxanium",
  "Plus Jakarta Sans",
  "Poppins",
  "Public Sans",
  "Quicksand",
  "Raleway",
  "Roboto",
  "Signika",
  "Sora",
  "Source Sans Pro",
  "Space Grotesk",
  "Ubuntu",
  "Work Sans"
]
export const fontSerif = [
  "Alegreya",
  "Aleo",
  "Alike",
  "EB Garamond",
  "Fraunces",
  "Libre Baskerville",
  "Lora",
  "Merriweather",
  "Newsreader",
  "Noto Serif",
  "Playfair",
  "Roboto Slab",
  "Source Serif Pro"
]
export const fontMono = [
  "Anonymous Pro",
  "Cascadia Code",
  "Chivo Mono",
  "Courier Prime",
  "Cousine",
  "DM Mono",
  "Fira Code",
  "Geist Mono",
  "Google Sans Code",
  "IBM Plex Mono",
  "JetBrains Mono",
  "Martian Mono",
  "Overpass Mono",
  "Roboto Mono",
  "Share Tech Mono",
  "Source Code Pro",
  "Space Mono",
  "Ubuntu Mono"
]

const slugify = (str: string): string =>
  str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")

export const fonts = [...fontSans, ...fontSerif, ...fontMono].map((f) => `${slugify(f)}:400`).join("|")
