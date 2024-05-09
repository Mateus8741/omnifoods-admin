import { z } from 'zod'

export const createProductSchema = z.object({
  title: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  ingredients: z.string(),
  thumbnail: z.string().optional(),
  cover: z.string().optional(),
})

export type CreateProductSchema = z.infer<typeof createProductSchema>
