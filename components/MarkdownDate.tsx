import React from "react"

interface Props {
  date: string
}

export default function MarkdownDate({ date }: Props) {
  return <div className="text-sm">{date}</div>
}
