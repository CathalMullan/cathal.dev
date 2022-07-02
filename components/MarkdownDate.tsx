interface Props {
  date: string;
}

export function MarkdownDate({ date }: Props) {
  return <div className="text-sm">{date}</div>;
}
