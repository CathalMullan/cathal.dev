import React from 'react'
import RedditIcon from 'public/svg/RedditIcon.svg'

interface Props {
  url: string
  title: string
}

export default function RedditShare({ url, title }: Props) {
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(`https://www.cathal.dev/${url}`)

  return (
    <a
      className="fill-black dark:fill-white"
      href={`https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
      target="_blank"
      rel="noreferrer"
    >
      <RedditIcon className="h-6 w-6" />
    </a>
  )
}
