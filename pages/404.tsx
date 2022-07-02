import { PageLayout } from "components/PageLayout";

export default function NotFoundPage() {
  return (
    <PageLayout title="404">
      <div className="py-12 text-center">
        <h1 className="mb-4 text-9xl font-extrabold">404</h1>
        <p className="text-2xl font-semibold">Page not found</p>
      </div>
    </PageLayout>
  );
}
