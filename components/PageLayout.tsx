import Head from 'next/head'
import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
  title: string
  children: ReactNode
}

export default function PageLayout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className="flex min-h-screen flex-col bg-white dark:bg-slate-800">
        <Header />

        <div className="prose mx-auto min-w-[52rem] flex-grow pt-5 pb-5 prose-pre:rounded-md prose-pre:bg-inherit prose-pre:text-sm dark:prose-invert">
          {children}
        </div>

        <Footer />
      </main>
    </>
  )
}
