import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { postDir } from '~/utils'

export default defineEventHandler(async (event) => {
  const fileName = getRouterParam(event, 'id') + '.md'
  const fullPath = path.join(postDir, fileName)
  const fileContent = fs.readFileSync(fullPath, 'utf-8')

  const matterInfo = matter(fileContent)

  const processedContent = await remark().use(html).process(matterInfo.content)
  const content = processedContent.toString() as string

  return {
    title: matterInfo.data.title as string,
    content,
  }
})
