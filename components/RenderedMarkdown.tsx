import rehypeToc from "@jsdevtools/rehype-toc";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { MarkdownCode } from "./MarkdownCode";

interface Props {
  content: string;
}

export function RenderedMarkdown({ content }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeSlug,
        [
          rehypeToc,
          {
            headings: ["h2", "h3", "h4", "h5", "h6"],
            cssClasses: { list: "list-disc empty:pb-0 first:pb-8" },
          },
        ],
      ]}
      components={{ code: MarkdownCode }}
    >
      {content}
    </ReactMarkdown>
  );
}
