"use client"

import { IconTrash, IconUpload } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default () => {
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  return (
    <div className="flex gap-2">
      <Button
        loading={isSaving}
        onClick={() => {
          setIsSaving(true)
          setTimeout(() => setIsSaving(false), 4000)
        }}
      >
        {isSaving ? "Saving" : "Save"}
      </Button>
      <Button
        loading={isUploading}
        onClick={() => {
          setIsUploading(true)
          setTimeout(() => setIsUploading(false), 4000)
        }}
        variant={"outline"}
      >
        <IconUpload />
        {isUploading ? "Uploading" : "Upload"}
      </Button>
      <Button
        loading={isDeleting}
        onClick={() => {
          setIsDeleting(true)
          setTimeout(() => setIsDeleting(false), 4000)
        }}
        size={"icon"}
        variant={"destructive"}
      >
        <IconTrash />
      </Button>
    </div>
  )
}
