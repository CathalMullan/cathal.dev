import React from 'react'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { MarkdownFile } from 'lib/markdown'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Head from 'next/head'
import { fetchTagsStaticPaths, fetchTagsStaticProps } from 'lib/tags'

interface TagPageProps {
  tag: string
  blogPosts: Array<MarkdownFile>
  snippets: Array<MarkdownFile>
}

export default function TagPage({ tag, blogPosts, snippets }: TagPageProps) {
  let renderBlogPosts
  if (blogPosts.length > 0) {
    renderBlogPosts = (
      <>
        <h2>Blog Posts:</h2>
        <ul>
          {blogPosts.map((page: MarkdownFile) => (
            <li key={page.title}>
              <a href={`/${page.url}`}>{page.title}</a>
            </li>
          ))}
        </ul>
      </>
    )
  }

  let renderSnippets
  if (snippets.length > 0) {
    renderSnippets = (
      <>
        <h2>Snippets:</h2>
        <ul>
          {snippets.map((page: MarkdownFile) => (
            <li key={page.title}>
              <a href={`/${page.url}`}>{page.title}</a>
            </li>
          ))}
        </ul>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{tag}</title>
      </Head>

      <main className="flex min-h-screen flex-col bg-white dark:bg-slate-800">
        <Header />

        <div className="prose mx-auto min-w-[52rem] flex-grow pt-5 pb-5 prose-pre:rounded-md prose-pre:bg-inherit prose-pre:text-sm dark:prose-invert">
          <h1>{tag} content</h1>

          {renderBlogPosts}
          {renderSnippets}
        </div>

        <Footer />
      </main>
    </>
  )
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const tag = params ? `${params.tag}` : ''
  const pages = fetchTagsStaticProps(tag)

  const blogPosts = pages.filter((page) => page.url.includes('blog'))
  const snippets = pages.filter((page) => page.url.includes('snippets'))

  return {
    props: {
      tag,
      blogPosts,
      snippets,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: fetchTagsStaticPaths(),
    fallback: false,
  }
}
