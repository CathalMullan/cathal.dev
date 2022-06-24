import React from 'react'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { MarkdownFile } from 'lib/markdown'
import Markdown from 'components/Markdown'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Head from 'next/head'
import { fetchBlogStaticPaths, fetchBlogStaticProps } from 'lib/blog'

export default function BlogPage({ blog }: { blog: MarkdownFile }) {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>

      <main className="flex min-h-screen flex-col bg-white dark:bg-slate-800">
        <Header />
        <Markdown {...blog} />
        <Footer />
      </main>
    </>
  )
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params ? `${params.id}` : ''
  const blog = fetchBlogStaticProps('blog', id)

  return { props: { blog } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: fetchBlogStaticPaths('blog'),
    fallback: false,
  }
}
