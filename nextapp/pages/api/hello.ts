// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextRequest } from 'next/server'
import responseOk from 'lib/functions'

export const config = {
  runtime: 'experimental-edge',
}

export default function handler(req: NextRequest) {
  return responseOk({ name: 'John Doeee' })
}
