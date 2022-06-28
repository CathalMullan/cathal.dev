import Link from "next/link"
import SearchIcon from "public/svg/SearchIcon.svg"

export default function LinkedInLink() {
  return (
    <Link href="/search">
      <SearchIcon className="h-5 w-5" />
    </Link>
  )
}
