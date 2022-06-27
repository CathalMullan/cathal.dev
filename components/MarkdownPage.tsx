import React from 'react'
import MarkdownTags from './MarkdownTags'
import MarkdownDate from './MarkdownDate'
import RenderedMarkdown from './RenderedMarkdown'
import TwitterShare from './share/TwitterShare'
import RedditShare from './share/RedditShare'
import HackerNewsShare from './share/HackerNewsShare'

interface Props {
  url: string
  title: string
  content: string
  date: string
  tags: string[]
}

export default function MarkdownPage({ url, title, content, date, tags }: Props) {
  return (
    <>
      <div className="py-2 pb-4">
        <MarkdownDate date={date} />

        <div className="space-x-4 py-2">
          <MarkdownTags tags={tags} />
        </div>
      </div>

      <RenderedMarkdown content={content} />

      <section className="border-gray-2 border-t">
        <h3 className="flex justify-center">Share Article</h3>

        <div className="flex items-center justify-center space-x-10">
          <TwitterShare url={url} title={title} tags={tags} />
          <RedditShare url={url} title={title} />
          <HackerNewsShare url={url} title={title} />
        </div>
      </section>
    </>
  )
}
