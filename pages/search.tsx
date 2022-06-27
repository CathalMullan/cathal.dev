import PageLayout from 'components/PageLayout'
import SearchBar from 'components/SearchBar'
import { fetchMarkdownFiles, MarkdownFile } from 'lib/markdown'
import React from 'react'

interface Props {
  markdownPages: MarkdownFile[]
}

export default function SearchPage({ markdownPages }: Props) {
  return (
    <PageLayout title="Search">
      <SearchBar markdownPages={markdownPages} />
    </PageLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      markdownPages: fetchMarkdownFiles('.'),
    },
  }
}