import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function RenderedText({ children }: Props) {
  return <div className="prose mx-auto prose-pre:rounded-md prose-pre:bg-inherit dark:prose-invert">{children}</div>
}
