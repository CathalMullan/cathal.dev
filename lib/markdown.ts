import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import glob from 'glob'

export type MarkdownFile = {
  id: string
  folder: string
  url: string
  content: string
  title: string
  description: string
  date: string
  tags: string[]
}

export const articlesDirectory = path.join(process.cwd(), 'articles')

export function fetchMarkdownFiles(directory: string): MarkdownFile[] {
  const markdownDirectory = path.join(articlesDirectory, directory)
  const markdownFileNames = glob.sync(`${markdownDirectory}/**/*.md`)

  const markdownFiles = markdownFileNames.map((filePath) => {
    return gatherMarkdownMetadata(filePath)
  })

  return markdownFiles
}

export function fetchMarkdownFile(file: string): MarkdownFile {
  const filePath = path.join(articlesDirectory, file)
  return gatherMarkdownMetadata(filePath)
}

export function gatherMarkdownMetadata(filePath: string) {
  const fileName = path.basename(filePath)
  const id = fileName.replace(/[.]md$/, '')

  const relativePath = path.relative(articlesDirectory, filePath)
  const url = relativePath.replace(/[.]md$/, '')

  const relativeFolder = path.dirname(relativePath)
  const parentFolder = path.basename(relativeFolder)

  const article = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(article)

  return {
    id: id,
    folder: parentFolder,
    url: url,
    content: content,
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags,
  }
}

export function fetchMarkdownTags() {
  const markdownFiles = fetchMarkdownFiles('.')

  const markdownTags: Set<string> = new Set()
  markdownFiles.map((file) => {
    file.tags.forEach((tag) => {
      markdownTags.add(tag)
    })
  })

  return Array.from(markdownTags).sort()
}
