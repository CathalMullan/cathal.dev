import { MarkdownFile } from 'lib/markdown'
import React from 'react'
import MarkdownDate from './MarkdownDate'
import MarkdownTags from './MarkdownTags'

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

                <MarkdownDate date={date} />
                <MarkdownTags tags={tags} />
                <p>{description}</p>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  )
}
