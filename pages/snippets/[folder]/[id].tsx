import React from 'react'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { MarkdownFile, fetchNestedMarkdownIDs, fetchNestedMarkdownFile } from 'lib/markdown'
import Markdown from 'components/Markdown'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Head from 'next/head'

export default function Blog({ snippet }: { snippet: MarkdownFile }) {
  return (
    <>
      <Head>
        <title>cathal.dev - {snippet.title}</title>
      </Head>

      <main>
        <Header />
        <Markdown content={snippet.content} />
        <Footer />
      </main>
    </>
  )
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params ? `${params.id}` : ''
  const folder = params ? `${params.folder}` : ''

  const snippet = fetchNestedMarkdownFile('snippets', folder, id)
  return { props: { snippet } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: fetchNestedMarkdownIDs('snippets'),
    fallback: false,
  }
}
