import CommitLink from './links/CommitLink'
import KeybaseTxtLink from './links/KeybaseTxtLink'
import RobotsTxtLink from './links/RobotsTxtLink'
import SecurityTxtLink from './links/SecurityTxtLink'
import SitemapLink from './links/SitemapLink'

export default function Footer() {
  return (
    <footer className="border-gray-2 border-t bg-white pt-5 pb-5 text-sm dark:border-gray-600 dark:bg-[#111b27]">
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
