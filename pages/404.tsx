import Footer from 'components/Footer'
import Header from 'components/Header'
import Head from 'next/head'
import React from 'react'

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>cathal.dev - 404</title>
      </Head>

      <main className="flex min-h-screen flex-col bg-white dark:bg-slate-800">
        <Header />

        <section className="flex flex-grow items-center">
          <div className="mx-auto flex flex-col px-5 text-center">
            <h2 className="mb-8 text-9xl font-extrabold">404</h2>
            <p className="text-2xl font-semibold md:text-3xl">{'Page not found'}</p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
