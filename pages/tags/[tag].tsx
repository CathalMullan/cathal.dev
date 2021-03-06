import { MarkdownCards } from "components/MarkdownCards";
import { PageLayout } from "components/PageLayout";
import { fetchMarkdownFiles, fetchMarkdownTags, MarkdownFile } from "lib/markdown";
import { GetStaticPaths, GetStaticPropsContext } from "next";

interface Props {
  tag: string;
  markdownPages: MarkdownFile[];
}

export default function TagPage({ tag, markdownPages }: Props) {
  return (
    <PageLayout title={tag}>
      <h1>{tag} content</h1>
      <MarkdownCards markdownPages={markdownPages} />
    </PageLayout>
  );
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const tag = params ? `${params.tag}` : "";

  const markdownFiles = fetchMarkdownFiles(".");
  const blogPosts = markdownFiles.filter((file) => file.url.includes("blog") && file.tags.includes(tag));
  const snippets = markdownFiles.filter((file) => file.url.includes("snippets") && file.tags.includes(tag));

  return {
    props: {
      tag,
      markdownPages: blogPosts.concat(snippets),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const markdownTags = fetchMarkdownTags();

  const paths: { params: { tag: string } }[] = [];
  markdownTags.forEach((tag) => {
    paths.push({ params: { tag } });
  });

  return {
    paths,
    fallback: false,
  };
};
