import { envClient } from '@/lib/config/env-client'

export const SITE = {
  baseUrl: envClient.NEXT_PUBLIC_BASE_URL,
  domain: new URL(envClient.NEXT_PUBLIC_BASE_URL).hostname,
}
