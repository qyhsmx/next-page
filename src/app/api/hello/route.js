import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function GET(request) {
  let responseText = 'Hello World'

  getRequestContext().env.

  return new Response(responseText)
}
