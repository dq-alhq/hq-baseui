import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Command } from "@/components/ui/command"

const items = [
  { id: 1, name: "Ubuntu" },
  { id: 2, name: "Debian" },
  { id: 3, name: "Linux Mint" },
  { id: 4, name: "Fedora" },
  { id: 5, name: "Arch Linux" },
  { id: 6, name: "Manjaro" },
  { id: 7, name: "EndeavourOS" },
  { id: 8, name: "Pop!_OS" },
  { id: 9, name: "Zorin OS" },
  { id: 10, name: "elementary OS" },
  { id: 11, name: "Kali Linux" },
  { id: 12, name: "Parrot OS" },
  { id: 13, name: "BlackArch Linux" },
  { id: 14, name: "openSUSE" },
  { id: 15, name: "Rocky Linux" },
  { id: 16, name: "AlmaLinux" },
  { id: 17, name: "CentOS Stream" },
  { id: 18, name: "Red Hat Enterprise Linux" },
  { id: 19, name: "Oracle Linux" },
  { id: 20, name: "Gentoo Linux" },
  { id: 21, name: "Void Linux" },
  { id: 22, name: "NixOS" },
  { id: 23, name: "Slackware" },
  { id: 24, name: "Puppy Linux" },
  { id: 25, name: "MX Linux" },
  { id: 26, name: "antiX" },
  { id: 27, name: "Q4OS" },
  { id: 28, name: "Lubuntu" },
  { id: 29, name: "Xubuntu" },
  { id: 30, name: "Kubuntu" },
  { id: 31, name: "Ubuntu MATE" },
  { id: 32, name: "Ubuntu Budgie" },
  { id: 33, name: "KDE neon" },
  { id: 34, name: "Garuda Linux" },
  { id: 35, name: "CachyOS" },
  { id: 36, name: "Artix Linux" },
  { id: 37, name: "Alpine Linux" },
  { id: 38, name: "Clear Linux" },
  { id: 39, name: "Deepin" },
  { id: 40, name: "Tails" },
  { id: 41, name: "Whonix" },
  { id: 42, name: "Qubes OS" },
  { id: 43, name: "Bazzite" },
  { id: 44, name: "Nobara Linux" },
  { id: 45, name: "SteamOS" },
  { id: 46, name: "Raspberry Pi OS" },
  { id: 47, name: "DietPi" },
  { id: 48, name: "OpenWrt" },
  { id: 49, name: "Kaisen Linux" },
  { id: 50, name: "BlendOS" }
]

export default () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button className="w-fit" onClick={() => setOpen(true)} variant="outline">
        Open Menu
      </Button>
      <Command.Dialog items={items} onOpenChange={setOpen} open={open}>
        <Command.Input placeholder="Search..." />
        <Command.List>
          {(item) => (
            <Command.Item key={item.id} value={item.name}>
              {item.name}
            </Command.Item>
          )}
        </Command.List>
      </Command.Dialog>
    </>
  )
}
