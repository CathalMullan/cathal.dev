import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type MarkdownFile = {
  id: string
  content: string
  title: string
  date: string
}

const articlesDirectory = path.join(process.cwd(), 'articles')

export function fetchMarkdownFiles(directory: string): Array<MarkdownFile> {
  const markdownDirectory = path.join(articlesDirectory, directory)
  const markdownFileNames = fs.readdirSync(markdownDirectory)

  const markdownFiles = markdownFileNames.map((fileName) => {
    const id = fileName.replace(/[.]md$/, '')

    const fullPath = path.join(markdownDirectory, fileName)
    const article = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(article)

    return {
      id: id,
      content: content,
      title: data.title,
      date: data.date,
    }
  })

  return markdownFiles
}

export function fetchMarkdownIDs(directory: string) {
  const markdownDirectory = path.join(articlesDirectory, directory)
  const markdownFileNames = fs.readdirSync(markdownDirectory)

  return markdownFileNames.map((fileName) => {
    return {
      params: { id: fileName.replace(/[.]md$/, '') },
    }
  })
}

export function fetchMarkdownFile(directory: string, id: string): MarkdownFile {
  const markdownDirectory = path.join(articlesDirectory, directory)
  const fullPath = path.join(markdownDirectory, `${id}.md`)

  const article = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(article)

  return {
    id: id,
    content: content,
    title: data.title,
    date: data.date,
  }
}
