import { MarkdownFile } from "lib/markdown";

import { MarkdownDate } from "./MarkdownDate";
import { MarkdownTags } from "./MarkdownTags";

interface Props {
  markdownPages: MarkdownFile[];
}

export function MarkdownCards({ markdownPages }: Props) {
  return (
    <div>
      {markdownPages.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {markdownPages.map(({ id, url, title, description, tags, date }: MarkdownFile) => (
            <div key={id} className="rounded-lg hover:bg-gray-100">
              <div className="p-4">
                <a href={`/${url}`} className="mb-2 text-xl font-bold no-underline hover:underline">
                  {title}
                </a>

                <MarkdownDate date={date} />
                <MarkdownTags tags={tags} />
                <div>{description}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
