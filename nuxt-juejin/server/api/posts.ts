import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { postDir } from '~/utils'

export default defineEventHandler((event) => {
  let { page, size } = getQuery(event)
  page = +page!
  size = +size!

  const fileNames = fs.readdirSync(postDir)
  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/.md$/g, '')

    const fullPath = path.join(postDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const matterInfo = matter(fileContents)
    const fileInfo = fs.statSync(fullPath)

    return {
      id,
      title: matterInfo.data.title as string,
      date: fileInfo.ctime,
    }
  })

  return new Promise<
    {
      id: string
      title: string
      date: Date
    }[]
  >((resolve) => {
    const start = (page - 1) * size
    const end = start + size

    posts.sort((a, b) => (a.date < b.date ? -1 : 1))
    setTimeout(() => {
      resolve(posts.slice(start, end))
    }, 1000)
  })
})
