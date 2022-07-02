import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function RenderedText({ children }: Props) {
  return (
    <div className="prose mx-auto min-w-[50%] prose-code:rounded-sm prose-code:bg-code_light prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-md prose-pre:bg-inherit dark:prose-invert prose-code:dark:bg-code_dark">
      {children}
    </div>
  );
}
