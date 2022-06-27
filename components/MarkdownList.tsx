import { MarkdownFile } from 'lib/markdown'
import React from 'react'

interface Props {
  title: string
  markdownFiles: MarkdownFile[]
}

export default function MarkdownList({ title, markdownFiles }: Props) {
  return (
    <>
      {markdownFiles.length > 0 && (
        <section>
          <h2>{title}:</h2>
          <ul>
            {markdownFiles.map(({ id, url, title }: MarkdownFile) => (
              <li key={id}>
                <a href={`/${url}`}>{title}</a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
