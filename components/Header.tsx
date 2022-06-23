import Link from 'next/link'
import GitHubLink from 'components/links/GitHubLink'
import LinkedInLink from 'components/links/LinkedInLink'
import EmailLink from './links/EmailLink'
import LightningBolt from 'public/svg/LightningBolt.svg'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b border-gray-200 bg-white pt-5 pb-5 dark:border-gray-600 dark:bg-[#111b27]">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center space-x-2 pl-8">
            <LightningBolt className="h-8 w-8 text-amber-400" />
            <span className="text-xl font-bold">cathal.dev</span>
          </a>
        </Link>

        <div className="flex items-center space-x-8 pr-8">
          <ThemeToggle />
          <GitHubLink />
          <LinkedInLink />
          <EmailLink />
        </div>
      </div>
    </header>
  )
}
