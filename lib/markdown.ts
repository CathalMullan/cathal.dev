import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import glob from 'glob'

export type MarkdownFile = {
  id: string
  url: string
  content: string
  title: string
  date: string
  tags: Array<string>
}

export const articlesDirectory = path.join(process.cwd(), 'articles')

// FIXME: So much duplicated logic between these 'lib' files, cleanup!

export function fetchMarkdownFiles(directory: string): Array<MarkdownFile> {
  const markdownDirectory = path.join(articlesDirectory, directory)
  const markdownFileNames = glob.sync(`${markdownDirectory}/**/*.md`)

  const markdownFiles = markdownFileNames.map((filePath) => {
    const relativePath = path.relative(markdownDirectory, filePath)
    const id = relativePath.replace(/[.]md$/, '')

    const article = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(article)

    return {
      id: id,
      url: directory + '/' + id,
      content: content,
      title: data.title,
      date: data.date,
      tags: data.tags,
    }
  })

  return markdownFiles
}
