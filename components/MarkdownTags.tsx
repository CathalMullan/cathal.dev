interface Props {
  tags: string[];
}

export function MarkdownTags({ tags }: Props) {
  return (
    <div>
      {tags.length > 0 && (
        <div className="space-x-2 py-2">
          {tags.map((tag: string) => (
            <a
              key={tag}
              className="mb-2 mr-2 inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm no-underline hover:underline"
              href={`/tags/${tag}`}
            >
              {tag}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
