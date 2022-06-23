import CommitLink from './links/CommitLink'
import KeybaseTxtLink from './links/KeybaseTxtLink'
import RobotsTxtLink from './links/RobotsTxtLink'
import SecurityTxtLink from './links/SecurityTxtLink'
import SitemapLink from './links/SitemapLink'

export default function Footer() {
  return (
    <footer className="bottom-0 mt-12 w-full border-t pt-10 pb-10 text-sm">
      <div className="flex justify-center">Copyright © 2022 Cathal Mullan</div>

      <div className="flex justify-center py-4">
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
