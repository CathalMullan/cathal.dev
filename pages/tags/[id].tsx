import React from 'react'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { MarkdownFile } from 'lib/markdown'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Head from 'next/head'
import { fetchTagsStaticPaths, fetchTagsStaticProps } from 'lib/tags'

export default function TagPage({ id, pages }: { id: string; pages: Array<MarkdownFile> }) {
  return (
    <>
      <Head>
        <title>{id}</title>
      </Head>

      <main className="flex min-h-screen flex-col bg-white dark:bg-slate-800">
        <Header />

        <div className="prose mx-auto min-w-[52rem] flex-grow pt-5 pb-5 prose-pre:rounded-md prose-pre:bg-inherit prose-pre:text-sm dark:prose-invert">
          <h1>{id} content:</h1>

          <ul>
            {pages.map((page: MarkdownFile) => (
              <li key={page.title}>
                <a href={`/${page.url}`}>{page.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <Footer />
      </main>
    </>
  )
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params ? `${params.id}` : ''
  const pages = fetchTagsStaticProps(id)

  return {
    props: {
      id,
      pages,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: fetchTagsStaticPaths(),
    fallback: false,
  }
}
