import { Field } from "@/components/ui/field"
import { Radio } from "@/components/ui/radio"

export default () => {
  return (
    <div className="w-full max-w-xs">
      <Field.Set>
        <Field.Legend description="Select the compute environment for your cluster.">Compute Environment</Field.Legend>
        <Radio.Group defaultValue="kubernetes">
          <Field className="rounded-lg border p-3">
            <Radio value="kubernetes" />
            <Field.Label>Kubernetes</Field.Label>
            <Field.Description>Run GPU workloads on a K8s cluster.</Field.Description>
          </Field>
          <Field className="rounded-lg border p-3">
            <Radio value="vm" />
            <Field.Label>Virtual Machine</Field.Label>
            <Field.Description>Access a cluster to run GPU workloads.</Field.Description>
          </Field>
        </Radio.Group>
      </Field.Set>
    </div>
  )
}
