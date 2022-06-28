import React from "react"
import RenderedMarkdown from "./RenderedMarkdown"
import TwitterShare from "./share/TwitterShare"
import RedditShare from "./share/RedditShare"
import HackerNewsShare from "./share/HackerNewsShare"
import SEO from "./SEO"
import MarkdownTags from "./MarkdownTags"
import MarkdownDate from "./MarkdownDate"

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
        <MarkdownDate date={date} />
        <MarkdownTags tags={tags} />
      </div>

      <RenderedMarkdown content={content} />

      <section>
        <p className="flex justify-center text-lg">Share Article</p>

        <div className="flex items-center justify-center space-x-10">
          <TwitterShare url={url} title={title} tags={tags} />
          <RedditShare url={url} title={title} />
          <HackerNewsShare url={url} title={title} />
        </div>
      </section>
    </>
  )
}
