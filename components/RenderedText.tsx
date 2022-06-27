import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function RenderedText({ children }: Props) {
  return (
    <div className="prose mx-auto prose-pre:rounded-md prose-pre:bg-inherit prose-pre:text-sm dark:prose-invert">
      {children}
    </div>
  )
}
