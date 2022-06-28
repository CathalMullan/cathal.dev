import React from 'react'

interface Props {
  tags: string[]
}

export default function MarkdownTags({ tags }: Props) {
  return (
    <>
      {tags.length > 0 && (
        <div className="space-x-2 py-2">
          {tags.map((tag: string) => (
            <a
              key={tag}
              className="mr-2 mb-2 inline-block rounded-sm bg-gray-200 px-3 py-1 text-sm text-gray-700"
              href={`/tags/${tag}`}
            >
              {tag}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
