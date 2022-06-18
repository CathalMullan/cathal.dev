import Head from 'next/head'
import { Article, getArticles } from 'lib/articles'
import Link from 'next/link'
import { LightningBoltIcon } from '@heroicons/react/solid'

export default function Index({ articles }: { articles: Array<Article> }) {
  return (
    <div className="flex">
      <Head>
        <title>🚧 Under Construction 🚧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        {articles.map(({ id, title }: Article) => (
          <li key={id}>
            <Link href={`/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <LightningBoltIcon className="h-screen w-screen text-amber-400" />
    </div>
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
