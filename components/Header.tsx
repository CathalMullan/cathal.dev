import Link from "next/link";
import LightningBolt from "public/svg/LightningBolt.svg";

import { SearchLink } from "./links/SearchLink";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="w-full border-b border-gray-200 pt-5 pb-5 dark:border-gray-600 dark:bg-code_dark">
      <div className="flex items-center justify-between">
        <Link href="/">
          <button type="submit" className="flex items-center space-x-2 pl-8">
            <LightningBolt className="h-8 w-8 text-amber-400" />
            <span className="text-xl font-bold">cathal.dev</span>
          </button>
        </Link>

        <div className="flex items-center space-x-8 pr-8">
          <SearchLink />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
