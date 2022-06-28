import React, { ReactNode, useRef, useState } from "react"
import Clipboard from "public/svg/Clipboard.svg"

interface Props {
  children: ReactNode
}

export const CopyCode = ({ children }: Props) => {
  const codeDiv = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  const onClick = () => {
    setCopied(true)

    if (codeDiv.current) {
      // This is awful, but hey, it works.
      const codeElements = codeDiv.current.children[1].children[0].children

      const codeText = Array.from(codeElements)
        .filter((element) => !element.classList.contains("linenumber"))
        .map((element) => element.textContent)
        .join("")

      navigator.clipboard.writeText(codeText)
    }

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="relative" ref={codeDiv}>
      <button
        className="absolute top-1 right-1 m-1 h-6 w-6"
        aria-label="Copy code"
        type="button"
        onClick={onClick}
      >
        <Clipboard className={copied ? "animate-pulse" : ""} />
      </button>

      {children}
    </div>
  )
}
