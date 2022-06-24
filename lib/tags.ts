import fs from 'fs'
import matter from 'gray-matter'
import glob from 'glob'
import { articlesDirectory, MarkdownFile } from './markdown'
import path from 'path'

export function fetchMarkdownTags() {
  const markdownFileNames = glob.sync(`${articlesDirectory}/**/*.md`)

  const markdownTags: Set<string> = new Set()
  markdownFileNames.map((filePath) => {
    const article = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(article)

    const tags: Array<string> = data.tags
    tags.forEach((tag) => {
      markdownTags.add(tag)
    })
  })

  return Array.from(markdownTags).sort()
}

export function fetchTagsStaticProps(tag: string): Array<MarkdownFile> {
  const markdownFileNames = glob.sync(`${articlesDirectory}/**/*.md`)

  const pages: Array<MarkdownFile> = []
  markdownFileNames.map((filePath) => {
    const article = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(article)
    const id = filePath.replace(/[.]md$/, '')

    const urlPath = path.relative(articlesDirectory, filePath)
    const url = urlPath.replace(/[.]md$/, '')

    const tags: Array<string> = data.tags
    if (tags.includes(tag)) {
      pages.push({
        id: id,
        url: url,
        content: '',
        title: data.title,
        date: '',
        tags: [],
      })
    }
  })

  return pages
}

export function fetchTagsStaticPaths() {
  const tagsPaths: Array<{ params: { tag: string } }> = []
  const lookupTags = fetchMarkdownTags()

  lookupTags.map((tag) => {
    tagsPaths.push({ params: { tag } })
  })

  return tagsPaths
}
