"use client"

import { useState } from "react"
import { Field } from "@/components/ui/field"
import { Pagination } from "@/components/ui/pagination"
import { Slider } from "@/components/ui/slider"

export default () => {
  const [spacing, setSpacing] = useState<number>(1)
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Field>
        <Slider max={4} min={0} onValueChange={(v) => setSpacing(v as number)} value={spacing}>
          <Slider.Label>Spacing</Slider.Label>
          <Slider.Value />
        </Slider>
      </Field>
      <Pagination spacing={spacing}>
        <Pagination.First href="#" />
        <Pagination.Previous href="#" />
        <Pagination.Item href="#">1</Pagination.Item>
        <Pagination.Item isActive>2</Pagination.Item>
        <Pagination.Item href="#">3</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item href="#">25</Pagination.Item>
        <Pagination.Next href="#" />
        <Pagination.Last href="#" />
      </Pagination>
    </div>
  )
}
