import React from 'react'

interface Props {
  title: string
  tags: string[]
}

export default function MarkdownList({ title, tags }: Props) {
  return (
    <>
      {tags.length > 0 && (
        <section>
          <h2>{title}:</h2>
          <ul>
            {tags.map((tag: string) => (
              <li key={tag}>
                <a href={`/tags/${tag}`}>{tag}</a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
