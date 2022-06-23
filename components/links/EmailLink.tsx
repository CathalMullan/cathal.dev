import MailIcon from 'public/svg/MailIcon.svg'

export default function EmailLink() {
  return (
    <a href="mailto:contact@cathal.dev" className="ml-6 block fill-black dark:fill-white" aria-label="Email">
      <MailIcon className="h-6 w-6" />
    </a>
  )
}
