import PageLayout from 'components/PageLayout'
import React from 'react'

export default function NotFoundPage() {
  return (
    <PageLayout title="cathal.dev - 404">
      <div className="py-12 text-center">
        <h2 className="mb-4 text-9xl font-extrabold">404</h2>
        <p className="text-2xl font-semibold">{'Page not found'}</p>
      </div>
    </PageLayout>
  )
}
