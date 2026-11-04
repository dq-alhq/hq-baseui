import { defineCollection, defineConfig } from '@content-collections/core'
import {compileMDX} from '@content-collections/mdx'
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from 'remark-gfm'

import { z } from 'zod' 

const rehypePrettyCodeOptions = {
  keepBackground: true,
  theme: { light: "github-light", dark: "github-dark" }
}

const docs = defineCollection({
  name: 'docs',
  directory: './src/docs',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    content: z.string(),
    published: z.boolean().default(true),
    references: z.array(z.string()).optional(),
    status: z.enum(["stable", "alpha", "beta", "new"]).optional().default("stable"),
    order: z.number().default(0)
  }),
  transform: async (doc,ctx) => {
    const html = await compileMDX(ctx,doc,{
      remarkPlugins:[remarkGfm],
      rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions], rehypeSlug]
    })
    return {
      ...doc,
    html,
    slug: doc._meta.path,
  }}
})

export default defineConfig({
  content: [docs],
})
