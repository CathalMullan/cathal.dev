import Link from "next/link";
import SearchIcon from "public/svg/SearchIcon.svg";

export function SearchLink() {
  return (
    <Link href="/search">
      <SearchIcon className="h-5 w-5" />
    </Link>
  );
}
