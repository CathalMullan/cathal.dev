import { MarkdownFile } from "lib/markdown";
import { MarkdownCards } from "./MarkdownCards";
import { MarkdownDate } from "./MarkdownDate";
import { MarkdownTags } from "./MarkdownTags";
import { RenderedMarkdown } from "./RenderedMarkdown";
import { SEO } from "./SEO";
import { HackerNewsShare } from "./share/HackerNewsShare";
import { RedditShare } from "./share/RedditShare";
import { TwitterShare } from "./share/TwitterShare";

interface Props {
  url: string;
  title: string;
  description: string;
  content: string;
  date: string;
  tags: string[];
  relatedPosts: MarkdownFile[];
}

export function MarkdownPage({ url, title, description, content, date, tags, relatedPosts }: Props) {
  return (
    <>
      <SEO url={url} title={title} description={description} tags={tags} />

      <div className="py-2 pb-4">
        <MarkdownDate date={date} />
        <MarkdownTags tags={tags} />
      </div>

      <RenderedMarkdown content={content} />

      <hr className="dashed" />

      <section>
        <p className="flex justify-center text-lg">Share Article</p>

        <div className="flex items-center justify-center space-x-10">
          <TwitterShare url={url} title={title} tags={tags} />
          <RedditShare url={url} title={title} />
          <HackerNewsShare url={url} title={title} />
        </div>
      </section>

      <MarkdownCards text="Related Posts" markdownFiles={relatedPosts} />
    </>
  );
}
