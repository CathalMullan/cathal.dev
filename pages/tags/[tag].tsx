import React from 'react'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { MarkdownFile } from 'lib/markdown'
import { fetchTagsStaticPaths, fetchTagsStaticProps } from 'lib/tags'
import PageLayout from 'components/PageLayout'
import Link from 'next/link'

interface Props {
  tag: string
  blogPosts: MarkdownFile[]
  snippets: MarkdownFile[]
}

export default function TagPage({ tag, blogPosts, snippets }: Props) {
  return (
    <PageLayout title={tag}>
      <h1>{tag} content</h1>

      {blogPosts.length > 0 && (
        <div>
          <h2>Blog Posts:</h2>
          <ul>
            {blogPosts.map((page: MarkdownFile) => (
              <li key={page.title}>
                <a href={`/${page.url}`}>{page.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {snippets.length > 0 && (
        <div>
          <h2>Snippets:</h2>
          <ul>
            {snippets.map(({ id, url, title }: MarkdownFile) => (
              <li key={id}>
                <Link href={`/${url}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </PageLayout>
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
