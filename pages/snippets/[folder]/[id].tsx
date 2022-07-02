import { MarkdownPage } from "components/MarkdownPage";
import { PageLayout } from "components/PageLayout";
import { fetchMarkdownFile, fetchMarkdownFiles, fetchMarkdownFilesByTags, MarkdownFile } from "lib/markdown";
import { GetStaticPaths, GetStaticPropsContext } from "next";

interface Props {
  snippet: MarkdownFile;
  relatedPosts: MarkdownFile[];
}

export default function SnippetPage({ snippet, relatedPosts }: Props) {
  return (
    <PageLayout title={snippet.title}>
      <MarkdownPage {...snippet} relatedPosts={relatedPosts} />
    </PageLayout>
  );
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params ? `${params.id}` : "";
  const folder = params ? `${params.folder}` : "";

  const snippet = fetchMarkdownFile(`snippets/${folder}/${id}.md`);
  const relatedPosts = fetchMarkdownFilesByTags(snippet.tags)
    .filter((file) => file.id !== snippet.id)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 2);

  return { props: { snippet, relatedPosts } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const snippetFiles = fetchMarkdownFiles("snippets");

  const paths: { params: { id: string; folder: string } }[] = [];
  snippetFiles.forEach(({ id, folder }) => {
    paths.push({ params: { id, folder } });
  });

  return {
    paths,
    fallback: false,
  };
};
