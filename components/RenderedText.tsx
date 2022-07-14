import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function RenderedText({ children }: Props) {
  return (
    <div className="prose mx-auto prose-code:rounded-sm prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-md prose-pre:p-1 prose-pre:bg-inherit prose-p:mt-0 prose-p:mb-0">
      {children}
    </div>
  );
}
