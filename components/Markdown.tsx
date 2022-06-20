import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism } from 'react-syntax-highlighter'

// Strange error when importing this theme, ignore and move on.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="prose mx-auto prose-pre:p-0"
      remarkPlugins={[remarkGfm]}
      // https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')

          if (!inline && match) {
            return (
              <Prism style={coldarkDark} language={match[1]} showLineNumbers={true} PreTag="div" {...props}>
                {String(children).replace(/\n$/, '')}
              </Prism>
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
