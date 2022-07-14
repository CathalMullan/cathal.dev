import { useEffect, useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// Register syntax highlighted languages
// The default of shipping all languages results in a 2MB bundle, which I'd rather avoid
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import ignore from "react-syntax-highlighter/dist/cjs/languages/prism/ignore";
import nix from "react-syntax-highlighter/dist/cjs/languages/prism/nix";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import rust from "react-syntax-highlighter/dist/cjs/languages/prism/rust";
import yaml from "react-syntax-highlighter/dist/cjs/languages/prism/yaml";
// Strange error when importing themes, ignore and move on.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { coldarkCold } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { CopyCode } from "./CopyCode";

SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("yaml", yaml);
SyntaxHighlighter.registerLanguage("ignore", ignore);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("rust", rust);
SyntaxHighlighter.registerLanguage("nix", nix);

interface Props {
  // eslint-disable-next-line react/require-default-props
  inline?: boolean;
  // eslint-disable-next-line react/require-default-props
  className?: string;
  children: React.ReactNode & React.ReactNode[];
}

// https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
export function MarkdownCode({ inline, className, children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (inline) {
    return <code>{children}</code>;
  }

  // Fallback to using 'bash' highlighting, so we still maintain a consistant style (over using 'code' as suggested)
  const match = /language-(\w+)/.exec(className ?? "");
  const language = match ? match[1] : "bash";

  return (
    <CopyCode>
      <SyntaxHighlighter style={coldarkCold} language={language} showLineNumbers>
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </CopyCode>
  );
}
