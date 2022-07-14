import MailIcon from "public/svg/MailIcon.svg";

export function EmailLink() {
  return (
    <a href="mailto:contact@cathal.dev" className="fill-black" aria-label="Email">
      <MailIcon className="h-7 w-7" />
    </a>
  );
}
