import Link from "next/link";
import LightningBolt from "public/svg/LightningBolt.svg";

import { SearchLink } from "./links/SearchLink";

export function Header() {
  return (
    <header className="border-b border-gray-200 p-5">
      <div className="flex justify-between m-auto lg:max-w-7xl pl-8 pr-8">
        <Link href="/">
          <button type="submit" aria-label="Home" className="flex items-center space-x-2">
            <LightningBolt className="h-8 w-8 text-amber-400" />
            <span className="text-xl font-bold">cathal.dev</span>
          </button>
        </Link>

        <SearchLink />
      </div>
    </header>
  );
}
