import Link from 'next/link'
import GitHubLink from 'components/links/GitHubLink'
import LinkedInLink from 'components/links/LinkedInLink'
import EmailLink from './links/EmailLink'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full bg-white shadow">
      <div className="container mx-auto flex h-16 max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/">
          <a className="flex items-center p-2 leading-none">
            <span className="text-lg font-bold">cathal.dev</span>
          </a>
        </Link>

        <div className="flex items-center">
          <GitHubLink />
          <LinkedInLink />
          <EmailLink />
        </div>
      </div>
    </header>
  )
}