import { MarkdownPage } from "components/MarkdownPage";
import { PageLayout } from "components/PageLayout";
import { fetchMarkdownFile, fetchMarkdownFiles, MarkdownFile } from "lib/markdown";
import { GetStaticPaths, GetStaticPropsContext } from "next";

interface Props {
  blog: MarkdownFile;
}

export default function BlogPage({ blog }: Props) {
  return (
    <PageLayout title={blog.title}>
      <MarkdownPage {...blog} />
    </PageLayout>
  );
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params ? `${params.id}` : "";

  return {
    props: {
      blog: fetchMarkdownFile(`blog/${id}.md`),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogFiles = fetchMarkdownFiles("blog");

  const paths: { params: { id: string } }[] = [];
  blogFiles.forEach(({ id }) => {
    paths.push({ params: { id } });
  });

  return {
    paths,
    fallback: false,
  };
};
