"use client"

import { cn } from "cn"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"
import { Drawer } from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMediaQuery } from "@/hooks/use-media-query"

export default () => {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog onOpenChange={setOpen} open={open}>
        <Dialog.Trigger render={<Button variant="outline" />}>Edit Profile</Dialog.Trigger>
        <Dialog.Content className="sm:max-w-100">
          <Dialog.Header>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when you&apos;re done.
            </Dialog.Description>
          </Dialog.Header>
          <ProfileForm />
        </Dialog.Content>
      </Dialog>
    )
  }

  return (
    <Drawer onOpenChange={setOpen} open={open}>
      <Drawer.Trigger render={<Button variant="outline" />}>Edit Profile</Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header className="text-left">
          <Drawer.Title>Edit profile</Drawer.Title>
          <Drawer.Description>Make changes to your profile here. Click save when you&apos;re done.</Drawer.Description>
        </Drawer.Header>
        <ProfileForm className="p-4" />
      </Drawer.Content>
    </Drawer>
  )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input defaultValue="shadcn@example.com" id="email" type="email" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="username">Username</Label>
        <Input defaultValue="@shadcn" id="username" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
