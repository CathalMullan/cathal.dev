import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import glob from 'glob'

export type MarkdownFile = {
  id: string
  content: string
  title: string
  date: string
}

const articlesDirectory = path.join(process.cwd(), 'articles')

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
      content: content,
      title: data.title,
      date: data.date,
    }
  })

  return markdownFiles
}

export function fetchMarkdownIDs(directory: string) {
  const markdownDirectory = path.join(articlesDirectory, directory)
  const markdownFileNames = glob.sync(`${markdownDirectory}/**/*.md`)

  return markdownFileNames.map((filePath) => {
    return {
      params: { id: path.relative(markdownDirectory, filePath).replace(/[.]md$/, '') },
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

export function fetchNestedMarkdownIDs(directory: string) {
  const markdownDirectory = path.join(articlesDirectory, directory)
  const markdownFileNames = glob.sync(`${markdownDirectory}/**/*.md`)

  return markdownFileNames.map((filePath) => {
    const relativePath = path.relative(markdownDirectory, filePath)
    const folder = path.dirname(relativePath)

    const folderPath = path.relative(folder, relativePath)
    const id = folderPath.replace(/[.]md$/, '')

    return {
      params: {
        folder,
        id,
      },
    }
  })
}

export function fetchNestedMarkdownFile(directory: string, folder: string, id: string): MarkdownFile {
  const markdownDirectory = path.join(articlesDirectory, directory)
  const nestedMarkdownDirectory = path.join(markdownDirectory, folder)
  const fullPath = path.join(nestedMarkdownDirectory, `${id}.md`)

  const article = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(article)

  return {
    id: id,
    content: content,
    title: data.title,
    date: data.date,
  }
}
