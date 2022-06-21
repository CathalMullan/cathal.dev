import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Article = {
  id: string
  content: string
  title: string
  date: string
}

const articlesDirectory = path.join(process.cwd(), 'articles')
const blogDirectory = path.join(articlesDirectory, 'blog')

export function getArticles(): Array<Article> {
  const articleNames = fs.readdirSync(blogDirectory)

  const articles = articleNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(blogDirectory, fileName)
    const article = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(article)

    return {
      id: id,
      content: content,
      title: data.title,
      date: data.date,
    }
  })

  return articles
}

export function getArticleIDs() {
  const articleNames = fs.readdirSync(blogDirectory)
  return articleNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export function getArticle(id: string): Article {
  const fullPath = path.join(blogDirectory, `${id}.md`)
  const article = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(article)

  return {
    id: id,
    content: content,
    title: data.title,
    date: data.date,
  }
}

export function getWhoAmI(): Article {
  const fullPath = path.join(articlesDirectory, 'whoami.md')
  const article = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(article)

  return {
    id: 'whoami',
    content: content,
    title: data.title,
    date: data.date,
  }
}
