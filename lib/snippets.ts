import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import glob from 'glob'
import { articlesDirectory, MarkdownFile } from './markdown'

export function fetchSnippetsStaticProps(directory: string, folder: string, id: string): MarkdownFile {
  const markdownDirectory = path.join(articlesDirectory, directory)
  const nestedMarkdownDirectory = path.join(markdownDirectory, folder)
  const fullPath = path.join(nestedMarkdownDirectory, `${id}.md`)

  const article = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(article)

  return {
    id: id,
    url: '',
    content: content,
    title: data.title,
    date: data.date,
    tags: data.tags,
  }
}

export function fetchSnippetsStaticPaths(directory: string) {
  const markdownDirectory = path.join(articlesDirectory, directory)
  const markdownFileNames = glob.sync(`${markdownDirectory}/**/*.md`)

  const snippetsPaths: Array<{ params: { id: string; folder: string } }> = []
  markdownFileNames.map((filePath) => {
    const relativePath = path.relative(markdownDirectory, filePath)
    const folder = path.dirname(relativePath)

    const folderPath = path.relative(folder, relativePath)
    const id = folderPath.replace(/[.]md$/, '')

    snippetsPaths.push({
      params: {
        id,
        folder,
      },
    })
  })

  return snippetsPaths
}
