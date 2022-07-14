import Clipboard from "public/svg/Clipboard.svg";
import ClipboardCopied from "public/svg/ClipboardCopied.svg";
import { ReactNode, useRef, useState } from "react";

interface Props {
  children: ReactNode;
}

export function CopyCode({ children }: Props) {
  const codeDiv = useRef<HTMLDivElement>(null);

  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    if (!codeDiv.current) {
      return;
    }

    setCopied(true);

    // This is awful, but hey, it works.
    const { textContent } = codeDiv.current.children[1].children[0];
    if (!textContent) {
      return;
    }

    const codeText = textContent
      .split("\n")
      .map((element, index) => element.substring((index + 1).toString().length))
      .join("\n");

    navigator.clipboard.writeText(codeText);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className="relative tracking-normal"
      ref={codeDiv}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <button className="absolute right-1 m-2 h-6 w-6" aria-label="Copy code" type="button" onClick={onClick}>
        {copied ? (
          <ClipboardCopied className="rounded-sm fill-white" />
        ) : (
          <Clipboard className={visible ? "rounded-sm fill-white" : "hidden"} />
        )}
      </button>

      {children}
    </div>
  );
}
