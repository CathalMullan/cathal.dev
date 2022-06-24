import React from 'react'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { MarkdownFile } from 'lib/markdown'
import Markdown from 'components/Markdown'
import { fetchBlogStaticPaths, fetchBlogStaticProps } from 'lib/blog'
import PageLayout from 'components/PageLayout'

export default function BlogPage({ blog }: { blog: MarkdownFile }) {
  return (
    <PageLayout title={blog.title}>
      <Markdown {...blog} />
    </PageLayout>
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
