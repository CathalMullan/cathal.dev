import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import glob from 'glob'
import { articlesDirectory, MarkdownFile } from './markdown'

export function fetchBlogStaticPaths(directory: string) {
  const markdownDirectory = path.join(articlesDirectory, directory)
  const markdownFileNames = glob.sync(`${markdownDirectory}/**/*.md`)

  const blogPaths: { params: { id: string } }[] = []
  markdownFileNames.map((filePath) => {
    const relativePath = path.relative(markdownDirectory, filePath)
    const id = relativePath.replace(/[.]md$/, '')

    blogPaths.push({
      params: {
        id: id,
      },
    })
  })

  return blogPaths
}

export function fetchBlogStaticProps(directory: string, id: string): MarkdownFile {
  const markdownDirectory = path.join(articlesDirectory, directory)
  const fullPath = path.join(markdownDirectory, `${id}.md`)

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
