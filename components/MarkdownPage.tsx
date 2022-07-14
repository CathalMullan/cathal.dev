import { MarkdownDate } from "./MarkdownDate";
import { MarkdownTags } from "./MarkdownTags";
import { RenderedMarkdown } from "./RenderedMarkdown";
import { SEO } from "./SEO";

interface Props {
  url: string;
  title: string;
  description: string;
  content: string;
  date: string;
  tags: string[];
}

export function MarkdownPage({ url, title, description, content, date, tags }: Props) {
  return (
    <>
      <SEO url={url} title={title} description={description} tags={tags} />

      <div className="py-2 pb-0">
        <MarkdownDate date={date} />
        <MarkdownTags tags={tags} />
      </div>

      <RenderedMarkdown content={content} />
    </>
  );
}
