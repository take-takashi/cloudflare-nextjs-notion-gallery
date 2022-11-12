// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextRequest } from 'next/server'
import { Client as NotionClient } from '@notionhq/client'
import responseOk from 'lib/functions'

export const config = {
  runtime: 'experimental-edge',
}

const notion = new NotionClient({
  auth: process.env.NOTION_API_API_TEST_AUTH,
})
const databaseId: string = process.env.NOTION_API_API_TEST_DB ?? ''

/**
 * API handler
 *
 * @param req
 * @returns
 */
export default async function handler(req: NextRequest) {
  // NotionDBからDBIDを指定して属するPageIdリストを取得する
  const pageIds: string[] = await getPageIdFromDatabase(databaseId)

  return responseOk({ name: pageIds })
}

/**
 * データベースIDからDB内のページIDリストを返す。
 *
 * @param databaseId
 * @returns ページのIDリスト
 */
async function getPageIdFromDatabase(databaseId: string): Promise<string[]> {
  const res = await notion.databases.query({
    database_id: databaseId,
  })

  const pages: string[] = []

  res.results.map((result) => {
    pages.push(result.id)
  })

  return pages
}
