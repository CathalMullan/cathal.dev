import React from 'react'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { MarkdownFile } from 'lib/markdown'
import Markdown from 'components/Markdown'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Head from 'next/head'
import { fetchSnippetsStaticPaths, fetchSnippetsStaticProps } from 'lib/snippets'

export default function SnippetPage({ snippet }: { snippet: MarkdownFile }) {
  return (
    <>
      <Head>
        <title>{snippet.title}</title>
      </Head>

      <main className="flex min-h-screen flex-col bg-white dark:bg-slate-800">
        <Header />
        <Markdown {...snippet} />
        <Footer />
      </main>
    </>
  )
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params ? `${params.id}` : ''
  const folder = params ? `${params.folder}` : ''
  const snippet = fetchSnippetsStaticProps('snippets', folder, id)

  return { props: { snippet } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: fetchSnippetsStaticPaths('snippets'),
    fallback: false,
  }
}
