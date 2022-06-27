import React from 'react'
import MarkdownTags from './MarkdownTags'
import MarkdownDate from './MarkdownDate'
import RenderedMarkdown from './RenderedMarkdown'

interface Props {
  content: string
  date: string
  tags: string[]
}

export default function MarkdownPage({ content, date, tags }: Props) {
  return (
    <>
      <div className="py-2 pb-4">
        <MarkdownDate date={date} />

        <div className="space-x-4 py-2">
          <MarkdownTags tags={tags} />
        </div>
      </div>

      <RenderedMarkdown content={content} />
    </>
  )
}
