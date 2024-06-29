import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function GET(request) {
  let responseText = 'Hello World'

  let cat = getRequestContext().env.CAT_DB.prepare('SELECT * from cat_info')

  return new Response(cat)
}
