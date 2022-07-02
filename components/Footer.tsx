import CommitLink from "./links/CommitLink"
import GitHubLink from "components/links/GitHubLink"
import LinkedInLink from "components/links/LinkedInLink"
import EmailLink from "./links/EmailLink"

export default function Footer() {
  return (
    <footer className="border-gray-2 border-t pt-5 pb-5 text-sm dark:border-gray-600 dark:bg-code_dark">
      <div className="flex justify-center">Copyright © 2022 Cathal Mullan</div>

      <div className="flex items-center justify-center space-x-10 py-2">
        <GitHubLink />
        <LinkedInLink />
        <EmailLink />
      </div>

      <div className="flex justify-center">
        <CommitLink />
      </div>
    </footer>
  )
}
