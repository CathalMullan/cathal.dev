import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeToc from "@jsdevtools/rehype-toc"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { CopyCode } from "./CopyCode"

// Strange error when importing themes, ignore and move on.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { coldarkCold } from "react-syntax-highlighter/dist/cjs/styles/prism"

// Register syntax highlighted languages
// The default of shipping all languages results in a 2MB bundle, which I'd rather avoid
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash"
import yaml from "react-syntax-highlighter/dist/cjs/languages/prism/yaml"
import ignore from "react-syntax-highlighter/dist/cjs/languages/prism/ignore"
import rust from "react-syntax-highlighter/dist/cjs/languages/prism/rust"
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python"
import nix from "react-syntax-highlighter/dist/cjs/languages/prism/nix"
import { useTheme } from "next-themes"

SyntaxHighlighter.registerLanguage("bash", bash)
SyntaxHighlighter.registerLanguage("yaml", yaml)
SyntaxHighlighter.registerLanguage("ignore", ignore)
SyntaxHighlighter.registerLanguage("python", python)
SyntaxHighlighter.registerLanguage("rust", rust)
SyntaxHighlighter.registerLanguage("nix", nix)

interface Props {
  content: string
}

export default function RenderedMarkdown({ content }: Props) {
  const { theme } = useTheme()

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
      // https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
      components={{
        code({ inline, className, children }) {
          if (inline) {
            return <code>{children}</code>
          }

          // Fallback to using 'bash' highlighting, so we still maintain a consistant style (over using 'code' as suggested)
          const match = /language-(\w+)/.exec(className || "")
          const language = match ? match[1] : "bash"

          return (
            <CopyCode>
              <SyntaxHighlighter
                style={theme === "light" ? coldarkCold : coldarkDark}
                language={language}
                showLineNumbers={true}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            </CopyCode>
          )
        },
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
