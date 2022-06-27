import React from 'react'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { fetchMarkdownFile, fetchMarkdownFiles, MarkdownFile } from 'lib/markdown'
import MarkdownPage from 'components/MarkdownPage'
import PageLayout from 'components/PageLayout'

export default function SnippetPage({ snippet }: { snippet: MarkdownFile }) {
  return (
    <PageLayout title={snippet.title}>
      <MarkdownPage {...snippet} />
    </PageLayout>
  )
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params ? `${params.id}` : ''
  const folder = params ? `${params.folder}` : ''
  const snippet = fetchMarkdownFile(`snippets/${folder}/${id}.md`)

  return { props: { snippet } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const snippetFiles = fetchMarkdownFiles('snippets')

  const paths: { params: { id: string; folder: string } }[] = []
  snippetFiles.map(({ id, folder }) => {
    paths.push({ params: { id, folder } })
  })

  return {
    paths,
    fallback: false,
  }
}
