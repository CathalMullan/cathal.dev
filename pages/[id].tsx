import React from 'react'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { getArticleIDs, getArticle, Article } from 'lib/articles'
import Markdown from 'components/Markdown'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default function Blog({ article }: { article: Article }) {
  return (
    <div className="antialiased">
      <Header />
      <br />
      <Markdown content={article.content} />
      <br />
      <Footer />
    </div>
  )
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params ? `${params.id}` : ''
  const article = getArticle(id)

  return {
    props: {
      article: article,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = getArticleIDs()
  return {
    paths: ids,
    fallback: false,
  }
}
