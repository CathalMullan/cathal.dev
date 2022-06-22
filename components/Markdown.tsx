import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PrismLight } from 'react-syntax-highlighter'

// Strange error when importing this theme, ignore and move on.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

// Register syntax highlighted languages
// The default of shipping all languages results in a 2MB bundle, which I'd rather avoid
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust'
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import nix from 'react-syntax-highlighter/dist/cjs/languages/prism/nix'

PrismLight.registerLanguage('python', python)
PrismLight.registerLanguage('rust', rust)
PrismLight.registerLanguage('nix', nix)

export default function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="prose mx-auto pt-10 prose-pre:p-0"
      remarkPlugins={[remarkGfm]}
      // https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')

          if (!inline && match) {
            return (
              <PrismLight style={coldarkDark} language={match[1]} showLineNumbers={true} PreTag="div" {...props}>
                {String(children).replace(/\n$/, '')}
              </PrismLight>
            )
          }

          return (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
