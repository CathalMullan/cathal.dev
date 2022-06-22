import Head from 'next/head'
import { MarkdownFile, fetchMarkdownFiles, fetchMarkdownFile } from 'lib/markdown'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Markdown from 'components/Markdown'

interface IndexProps {
  whoAmI: MarkdownFile
  blogPosts: Array<MarkdownFile>
  snippets: Array<MarkdownFile>
}

export default function Index({ whoAmI, blogPosts, snippets }: IndexProps) {
  return (
    <>
      <Head>
        <title>cathal.dev</title>
      </Head>

      <main>
        <Header />
        <Markdown content={whoAmI.content} />

        <article className="prose mx-auto pt-10">
          <h2>Blog Posts</h2>
          Content with a purpose:
          <ul>
            {blogPosts.map(({ id, title, date }: MarkdownFile) => (
              <li key={id}>
                <a href={`/blog/${id}`}>
                  {date}: {title}
                </a>
              </li>
            ))}
          </ul>
        </article>

        <article className="prose mx-auto pt-10">
          <h2>Snippets</h2>
          Random notes:
          <ul>
            {snippets.map(({ id, title, date }: MarkdownFile) => (
              <li key={id}>
                <a href={`/snippets/${id}`}>
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
  const whoAmI = fetchMarkdownFile('.', 'whoami')
  const blogPosts = fetchMarkdownFiles('blog')
  const snippets = fetchMarkdownFiles('snippets')

  return {
    props: {
      whoAmI,
      blogPosts,
      snippets,
    },
  }
}
