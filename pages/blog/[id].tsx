import React from 'react'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { MarkdownFile, fetchMarkdownFile, fetchMarkdownIDs } from 'lib/markdown'
import Markdown from 'components/Markdown'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Head from 'next/head'

export default function Blog({ blog }: { blog: MarkdownFile }) {
  return (
    <>
      <Head>
        <title>cathal.dev - {blog.title}</title>
      </Head>

      <main>
        <Header />
        <Markdown content={blog.content} />
        <Footer />
      </main>
    </>
  )
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params ? `${params.id}` : ''
  const blog = fetchMarkdownFile('blog', id)
  return { props: { blog } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: fetchMarkdownIDs('blog'),
    fallback: false,
  }
}