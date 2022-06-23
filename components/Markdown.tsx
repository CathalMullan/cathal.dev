import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'

// Strange error when importing this theme, ignore and move on.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

// Register syntax highlighted languages
// The default of shipping all languages results in a 2MB bundle, which I'd rather avoid
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import yaml from 'react-syntax-highlighter/dist/cjs/languages/prism/yaml'
import ignore from 'react-syntax-highlighter/dist/cjs/languages/prism/ignore'
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust'
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python'
import nix from 'react-syntax-highlighter/dist/cjs/languages/prism/nix'

SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('yaml', yaml)
SyntaxHighlighter.registerLanguage('ignore', ignore)
SyntaxHighlighter.registerLanguage('python', python)
SyntaxHighlighter.registerLanguage('rust', rust)
SyntaxHighlighter.registerLanguage('nix', nix)

export default function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="prose mx-auto min-w-[50%] flex-grow pt-5 pb-5 prose-pre:rounded-md prose-pre:bg-inherit prose-pre:text-sm dark:prose-invert"
      remarkPlugins={[remarkGfm]}
      // https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')

          // Fallback to using 'bash' highlighting, so we still maintain a consistant style (over using 'code' as suggested)
          const language = !inline && match ? match[1] : 'bash;'

          return (
            <SyntaxHighlighter
              style={coldarkDark}
              language={language}
              codeTagProps={{ style: { fontFamily: 'JetBrains Mono NL' } }}
              showLineNumbers={true}
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          )
        },
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
