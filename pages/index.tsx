import Head from 'next/head'
import { Article, getArticles, getArticle } from 'lib/articles'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Markdown from 'components/Markdown'

export default function Index({ articles, whoAmI }: { articles: Array<Article>; whoAmI: Article }) {
  return (
    <>
      <Head>
        <title>cathal.dev</title>
      </Head>

      <main>
        <Header />
        <Markdown content={whoAmI.content} />

        <article className="prose mx-auto pt-10">
          <h2>Articles</h2>

          <ul>
            {articles.map(({ id, title, date }: Article) => (
              <li key={id}>
                <a href={`/${id}`}>
                  {date}: {title}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const articles = getArticles()
  const whoAmI = getArticle('whoami')

  return {
    props: {
      articles,
      whoAmI,
    },
  }
}
