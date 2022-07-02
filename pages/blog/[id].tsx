import { MarkdownPage } from "components/MarkdownPage";
import { PageLayout } from "components/PageLayout";
import { fetchMarkdownFile, fetchMarkdownFiles, fetchMarkdownFilesByTags, MarkdownFile } from "lib/markdown";
import { GetStaticPaths, GetStaticPropsContext } from "next";

interface Props {
  blog: MarkdownFile;
  relatedPosts: MarkdownFile[];
}

export default function BlogPage({ blog, relatedPosts }: Props) {
  return (
    <PageLayout title={blog.title}>
      <MarkdownPage {...blog} relatedPosts={relatedPosts} />
    </PageLayout>
  );
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params ? `${params.id}` : "";

  const blog = fetchMarkdownFile(`blog/${id}.md`);
  const relatedPosts = fetchMarkdownFilesByTags(blog.tags)
    .filter((file) => file.id !== blog.id)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 2);

  return { props: { blog, relatedPosts } };
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
