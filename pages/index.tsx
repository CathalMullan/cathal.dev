import Head from 'next/head'
import { MarkdownFile, fetchMarkdownFiles } from 'lib/markdown'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { fetchMarkdownTags } from 'lib/tags'

interface IndexProps {
  blogPosts: Array<MarkdownFile>
  snippets: Array<MarkdownFile>
  tags: Array<string>
}

export default function Index({ blogPosts, snippets, tags }: IndexProps) {
  return (
    <>
      <Head>
        <title>cathal.dev</title>
      </Head>

      <main className="flex min-h-screen flex-col bg-white dark:bg-slate-800">
        <Header />

        <article className="h-full flex-grow">
          <section className="prose mx-auto min-w-[52rem] pt-5 pb-5 dark:prose-invert">
            <h1>About Me</h1>
            <p>{"Hi, I'm Cathal Mullan, a Software Engineer"}</p>
            <p>{'My interests include Rust, Python and Nix.'}</p>
            <p>{"This site will likely cover these topics in time, but for now it's a work in progress."}</p>

            <section>
              <h2>Blog Posts:</h2>
              <ul>
                {blogPosts.map(({ id, title }: MarkdownFile) => (
                  <li key={id}>
                    <a href={`/blog/${id}`}>{title}</a>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Snippets:</h2>
              <ul>
                {snippets.map(({ id, title }: MarkdownFile) => (
                  <li key={id}>
                    <a href={`/snippets/${id}`}>{title}</a>
                  </li>
                ))}
              </ul>
            </section>
            <h2>Tags:</h2>

            <ul>
              {tags.map((tag: string) => (
                <li key={tag}>
                  <a href={`/tags/${tag}`}>{tag}</a>
                </li>
              ))}
            </ul>
            <section></section>
          </section>
        </article>

        <Footer />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const blogPosts = fetchMarkdownFiles('blog')
  const snippets = fetchMarkdownFiles('snippets')
  const tags = fetchMarkdownTags()

  return {
    props: {
      blogPosts,
      snippets,
      tags,
    },
  }
}
