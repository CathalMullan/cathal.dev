import Head from "next/head";
import { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { RenderedText } from "./RenderedText";

interface Props {
  title: string;
  children: ReactNode;
}

export function PageLayout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className="flex min-h-screen flex-col bg-white dark:bg-slate-800">
        <Header />

        <div className="flex-grow p-5">
          <RenderedText>{children}</RenderedText>
        </div>

        <Footer />
      </main>
    </>
  );
}
