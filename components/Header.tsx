import Link from 'next/link'
import GitHubLink from 'components/links/GitHubLink'
import LinkedInLink from 'components/links/LinkedInLink'
import EmailLink from './links/EmailLink'
import LightningBolt from 'public/svg/LightningBolt.svg'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-white dark:bg-slate-900">
      <div className="container mx-auto flex h-16 max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/">
          <a className="flex items-center p-2">
            <LightningBolt className="h-10 w-10 pr-2 text-amber-400" />
            <span className="text-xl font-bold">cathal.dev</span>
          </a>
        </Link>

        <div className="flex items-center">
          <ThemeToggle />
          <GitHubLink />
          <LinkedInLink />
          <EmailLink />
        </div>
      </div>
    </header>
  )
}
