import Head from 'next/head'
import { Article, getArticles } from 'lib/articles'
import Link from 'next/link'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default function Index({ articles }: { articles: Array<Article> }) {
  return (
    <>
      <Header />

      <main>
        <Head>
          <title>🚧 Under Construction 🚧</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ul>
          {articles.map(({ id, title, date }: Article) => (
            <li key={id}>
              <Link href={`/${id}`}>
                <a>
                  {title}: {date}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const articles = getArticles()
  return {
    props: {
      articles,
    },
  }
}
