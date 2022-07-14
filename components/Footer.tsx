import { GitHubLink } from "components/links/GitHubLink";
import { LinkedInLink } from "components/links/LinkedInLink";

import { CommitLink } from "./links/CommitLink";
import { EmailLink } from "./links/EmailLink";

export function Footer() {
  return (
    <footer className="border-gray-2 border-t pt-5 pb-5 text-sm">
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
  );
}
