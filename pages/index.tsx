import Head from 'next/head'
import { Article, getArticles, getWhoAmI } from 'lib/articles'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Markdown from 'components/Markdown'

export default function Index({ articles, whoAmI }: { articles: Array<Article>; whoAmI: Article }) {
  return (
    <>
      <Head>
        <title>cathal.dev</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
  const whoAmI = getWhoAmI()

  return {
    props: {
      articles,
      whoAmI,
    },
  }
}
