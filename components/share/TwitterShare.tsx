import TwitterIcon from "public/svg/TwitterIcon.svg";

interface Props {
  url: string;
  title: string;
  tags: string[];
}

export function TwitterShare({ url, title, tags }: Props) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(`https://www.cathal.dev/${url}`);
  const encodedHashtags = encodeURIComponent(tags.join(","));

  return (
    <a
      className="fill-black dark:fill-white"
      href={`https://twitter.com/share?text=${encodedTitle}&url=${encodedUrl}&hashtags=${encodedHashtags}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Share on Twitter"
    >
      <TwitterIcon className="h-6 w-6" />
    </a>
  );
}
