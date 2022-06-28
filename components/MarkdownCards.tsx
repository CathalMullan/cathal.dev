import { MarkdownFile } from 'lib/markdown'
import React from 'react'

interface Props {
  text: string
  markdownFiles: MarkdownFile[]
}

export default function MarkdownCards({ text, markdownFiles }: Props) {
  return (
    <>
      {markdownFiles.length > 0 && (
        <section>
          <h2>{text}:</h2>

          {markdownFiles.map(({ id, url, title, description, tags, date }: MarkdownFile) => (
            <div key={id} className="block rounded-lg pb-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="px-6 pt-4">
                <a href={`/${url}`} className="mb-2 text-xl font-bold">
                  {title}
                </a>
                <div className="text-sm">{date}</div>

                {tags.length > 0 && (
                  <div className="pt-4">
                    {tags.map((tag) => (
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

                <p>{description}</p>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  )
}
