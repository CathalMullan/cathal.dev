import React from 'react'

export default function MarkdownTags({ tags }: { tags: Array<string> }) {
  return (
    <>
      {tags.map((tag: string) => (
        <a key={tag} href={`/tags/${tag}`}>
          {tag}
        </a>
      ))}
    </>
  )
}
