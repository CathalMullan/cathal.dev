import React from 'react'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { MarkdownFile } from 'lib/markdown'
import Markdown from 'components/Markdown'
import { fetchSnippetsStaticPaths, fetchSnippetsStaticProps } from 'lib/snippets'
import PageLayout from 'components/PageLayout'

export default function SnippetPage({ snippet }: { snippet: MarkdownFile }) {
  return (
    <PageLayout title={snippet.title}>
      <Markdown {...snippet} />
    </PageLayout>
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
