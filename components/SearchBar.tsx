import React, { useState } from 'react'
import SearchIcon from 'public/svg/SearchIcon.svg'
import Fuse from 'fuse.js'
import { MarkdownFile } from 'lib/markdown'
import RenderedText from './RenderedText'
import MarkdownCards from './MarkdownCards'

interface Props {
  markdownPages: MarkdownFile[]
}

export default function SearchBar({ markdownPages }: Props) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<MarkdownFile[]>([])

  const searchIndex = new Fuse(markdownPages, {
    threshold: 0.3,
    keys: ['title', 'content', 'tags'],
    ignoreLocation: true,
  })

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    const results = searchIndex.search(searchQuery).map((result) => result.item)
    setResults(results)
  }

  return (
    <RenderedText>
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pl-3">
          <SearchIcon className="h-5 w-5 fill-black" />
        </div>

        <input
          type="search"
          className="block w-full rounded-lg border border-gray-600 bg-white p-4 pl-10 text-black"
          placeholder="Search"
          onChange={(event) => handleSearch(event.target.value)}
          value={query}
        />
      </div>

      <MarkdownCards text="Results" markdownFiles={results} />
    </RenderedText>
  )
}
