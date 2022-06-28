import React from 'react'
import RenderedMarkdown from './RenderedMarkdown'
import TwitterShare from './share/TwitterShare'
import RedditShare from './share/RedditShare'
import HackerNewsShare from './share/HackerNewsShare'
import SEO from './SEO'

interface Props {
  url: string
  title: string
  description: string
  content: string
  date: string
  tags: string[]
}

export default function MarkdownPage({ url, title, description, content, date, tags }: Props) {
  return (
    <>
      <SEO url={url} title={title} description={description} tags={tags} />

      <div className="py-2 pb-4">
        <div>{date}</div>

        <div className="space-x-4 py-2">
          {tags.map((tag: string) => (
            <a key={tag} href={`/tags/${tag}`}>
              {tag}
            </a>
          ))}
        </div>
      </div>

      <RenderedMarkdown content={content} />

      <section>
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
