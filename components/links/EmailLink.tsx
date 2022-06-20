import { MailIcon } from '@heroicons/react/solid'

export default function EmailLink() {
  return (
    <a href="mailto:contact@cathal.dev" className="ml-6 block">
      <MailIcon className="h-7 w-7" />
    </a>
  )
}
