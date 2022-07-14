import { MarkdownFile } from "lib/markdown";

import { MarkdownDate } from "./MarkdownDate";
import { MarkdownTags } from "./MarkdownTags";

interface Props {
  text: string;
  markdownFiles: MarkdownFile[];
}

export function MarkdownCards({ text, markdownFiles }: Props) {
  return (
    <div>
      {markdownFiles.length > 0 && (
        <div>
          <hr className="dashed" />
          <section>
            <h2>{text}:</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {markdownFiles.map(({ id, url, title, description, tags, date }: MarkdownFile) => (
                <div key={id} className="rounded-lg hover:bg-gray-100">
                  <div className="p-4">
                    <a href={`/${url}`} className="mb-2 text-xl font-bold">
                      {title}
                    </a>

                    <MarkdownDate date={date} />
                    <MarkdownTags tags={tags} />
                    <div>{description}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
