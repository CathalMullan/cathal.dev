import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { MarkdownCode } from "./MarkdownCode";

interface Props {
  content: string;
}

export function RenderedMarkdown({ content }: Props) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]} components={{ code: MarkdownCode }}>
      {content}
    </ReactMarkdown>
  );
}
