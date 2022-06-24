import PageLayout from 'components/PageLayout'
import React from 'react'

export default function NotFoundPage() {
  return (
    <PageLayout title="cathal.dev - 404">
      <section className="flex flex-grow items-center">
        <div className="mx-auto flex flex-col px-5 text-center">
          <h2 className="mb-8 text-9xl font-extrabold">404</h2>
          <p className="text-2xl font-semibold md:text-3xl">{'Page not found'}</p>
        </div>
      </section>
    </PageLayout>
  )
}
