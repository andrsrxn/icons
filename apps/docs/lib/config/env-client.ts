import * as z from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.url(),
})

export const envClient = envSchema.parse({
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
})
