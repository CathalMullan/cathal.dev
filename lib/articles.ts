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

export function getArticles(): Array<Article> {
  const articleNames = fs.readdirSync(articlesDirectory)

  const articles = articleNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(articlesDirectory, fileName)
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
  const articleNames = fs.readdirSync(articlesDirectory)
  return articleNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export function getArticle(id: string): Article {
  const fullPath = path.join(articlesDirectory, `${id}.md`)
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
