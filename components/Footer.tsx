import CommitLink from './links/CommitLink'
import KeybaseTxtLink from './links/KeybaseTxtLink'
import RobotsTxtLink from './links/RobotsTxtLink'
import SecurityTxtLink from './links/SecurityTxtLink'
import SitemapLink from './links/SitemapLink'

export default function Footer() {
  return (
    <footer className="mt-12 w-full border-t border-gray-2 dark:border-gray-600 bg-white pt-10 pb-10 text-sm dark:bg-[#111b27]">
      <div className="flex justify-center">Copyright © 2022 Cathal Mullan</div>

      <div className="flex justify-center space-x-4 py-2">
        <RobotsTxtLink />
        <SecurityTxtLink />
        <KeybaseTxtLink />
        <SitemapLink />
      </div>

      <div className="flex justify-center">
        <CommitLink />
      </div>
    </footer>
  )
}
