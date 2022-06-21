import Footer from 'components/Footer'
import Header from 'components/Header'
import Head from 'next/head'
import React from 'react'

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>cathal.dev</title>
      </Head>

      <main>
        <Header />

        <section className="flex h-full items-center p-16">
          <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
            <div className="max-w-md text-center">
              <h2 className="mb-8 text-9xl font-extrabold">404</h2>

              <p className="text-2xl font-semibold md:text-3xl">{'Page not found.'}</p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
