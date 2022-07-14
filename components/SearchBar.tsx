import Fuse from "fuse.js";
import { MarkdownFile } from "lib/markdown";
import SearchIcon from "public/svg/SearchIcon.svg";
import { useState } from "react";

import { MarkdownCards } from "./MarkdownCards";
import { RenderedText } from "./RenderedText";

interface Props {
  markdownPages: MarkdownFile[];
}

export function SearchBar({ markdownPages }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<MarkdownFile[]>([]);

  const searchIndex = new Fuse(markdownPages, {
    threshold: 0.3,
    keys: ["title", "content", "tags"],
    ignoreLocation: true,
  });

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    const searchResults = searchIndex.search(searchQuery).map((result) => result.item);
    setResults(searchResults);
  };

  return (
    <RenderedText>
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pl-3">
          <SearchIcon className="h-5 w-5 fill-black" />
        </div>

        <input
          type="search"
          className="block w-full rounded-lg border border-gray-200 bg-white p-4 pl-10 text-black"
          placeholder="Search"
          onChange={(event) => handleSearch(event.target.value)}
          value={query}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
      </div>

      <MarkdownCards text="Results" markdownFiles={results} />
    </RenderedText>
  );
}
