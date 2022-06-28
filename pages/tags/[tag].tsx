import React from 'react'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { fetchMarkdownFiles, fetchMarkdownTags, MarkdownFile } from 'lib/markdown'
import PageLayout from 'components/PageLayout'
import MarkdownCards from 'components/MarkdownCards'

interface Props {
  tag: string
  blogPosts: MarkdownFile[]
  snippets: MarkdownFile[]
}

export default function TagPage({ tag, blogPosts, snippets }: Props) {
  return (
    <PageLayout title={tag}>
      <h1>{tag} content</h1>

      <MarkdownCards text="Blog Posts" markdownFiles={blogPosts} />
      <MarkdownCards text="Snippets" markdownFiles={snippets} />
    </PageLayout>
  )
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const tag = params ? `${params.tag}` : ''

  const markdownFiles = fetchMarkdownFiles('.')
  const blogPosts = markdownFiles.filter((file) => file.url.includes('blog') && file.tags.includes(tag))
  const snippets = markdownFiles.filter((file) => file.url.includes('snippets') && file.tags.includes(tag))

  return {
    props: {
      tag,
      blogPosts,
      snippets,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const markdownTags = fetchMarkdownTags()

  const paths: { params: { tag: string } }[] = []
  markdownTags.map((tag) => {
    paths.push({ params: { tag } })
  })

  return {
    paths,
    fallback: false,
  }
}
