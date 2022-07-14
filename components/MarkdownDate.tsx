interface Props {
  date: string;
}

export function MarkdownDate({ date }: Props) {
  return <div className="text-sm font-bold text-gray-500">{date}</div>;
}
