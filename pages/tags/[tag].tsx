import React from 'react'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { MarkdownFile } from 'lib/markdown'
import { fetchTagsStaticPaths, fetchTagsStaticProps } from 'lib/tags'
import PageLayout from 'components/PageLayout'

interface TagPageProps {
  tag: string
  blogPosts: Array<MarkdownFile>
  snippets: Array<MarkdownFile>
}

export default function TagPage({ tag, blogPosts, snippets }: TagPageProps) {
  let renderBlogPosts
  if (blogPosts.length > 0) {
    renderBlogPosts = (
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
    )
  }

  let renderSnippets
  if (snippets.length > 0) {
    renderSnippets = (
      <div>
        <h2>Snippets:</h2>
        <ul>
          {snippets.map((page: MarkdownFile) => (
            <li key={page.title}>
              <a href={`/${page.url}`}>{page.title}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <PageLayout title={tag}>
      <h1>{tag} content</h1>

      {renderBlogPosts}
      {renderSnippets}
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
