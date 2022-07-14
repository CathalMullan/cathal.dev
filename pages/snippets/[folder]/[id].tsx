import { MarkdownPage } from "components/MarkdownPage";
import { PageLayout } from "components/PageLayout";
import { fetchMarkdownFile, fetchMarkdownFiles, MarkdownFile } from "lib/markdown";
import { GetStaticPaths, GetStaticPropsContext } from "next";

interface Props {
  snippet: MarkdownFile;
}

export default function SnippetPage({ snippet }: Props) {
  return (
    <PageLayout title={snippet.title}>
      <MarkdownPage {...snippet} />
    </PageLayout>
  );
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params ? `${params.id}` : "";
  const folder = params ? `${params.folder}` : "";

  return {
    props: {
      snippet: fetchMarkdownFile(`snippets/${folder}/${id}.md`),
    },
  };
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
