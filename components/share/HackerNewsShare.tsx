import React from 'react'
import HackerNewsIcon from 'public/svg/HackerNewsIcon.svg'

interface Props {
  url: string
  title: string
}

export default function HackerNewsShare({ url, title }: Props) {
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(`https://www.cathal.dev/${url}`)

  return (
    <a
      className="fill-black dark:fill-white"
      href={`https://news.ycombinator.com/submitlink?u=${encodedUrl}&t=${encodedTitle}`}
      target="_blank"
      rel="noreferrer"
    >
      <HackerNewsIcon className="h-8 w-8" />
    </a>
  )
}
