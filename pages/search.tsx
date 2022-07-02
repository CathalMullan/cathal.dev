import { PageLayout } from "components/PageLayout";
import { SearchBar } from "components/SearchBar";
import { fetchMarkdownFiles, MarkdownFile } from "lib/markdown";

interface Props {
  markdownPages: MarkdownFile[];
}

export default function SearchPage({ markdownPages }: Props) {
  return (
    <PageLayout title="Search">
      <SearchBar markdownPages={markdownPages} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const blogPosts = fetchMarkdownFiles("blog");
  const snippetPosts = fetchMarkdownFiles("snippets");

  return {
    props: {
      markdownPages: blogPosts.concat(snippetPosts),
    },
  };
}
