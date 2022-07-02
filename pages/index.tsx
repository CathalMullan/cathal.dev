import { MarkdownCards } from "components/MarkdownCards";
import { PageLayout } from "components/PageLayout";
import { RenderedMarkdown } from "components/RenderedMarkdown";
import { fetchMarkdownFile, fetchMarkdownFiles, MarkdownFile } from "lib/markdown";

interface Props {
  aboutMe: MarkdownFile;
  blogPosts: MarkdownFile[];
  snippets: MarkdownFile[];
}

export default function Index({ aboutMe, blogPosts, snippets }: Props) {
  return (
    <PageLayout title="Cathal Mullan's Personal Site">
      <RenderedMarkdown content={aboutMe.content} />

      <MarkdownCards text="Latest Blog Posts" markdownFiles={blogPosts} />
      <MarkdownCards text="Latest Snippets" markdownFiles={snippets} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const aboutMe = fetchMarkdownFile("about-me.md");

  const blogPosts = fetchMarkdownFiles("blog")
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 5);

  const snippets = fetchMarkdownFiles("snippets")
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 5);

  return {
    props: {
      aboutMe,
      blogPosts,
      snippets,
    },
  };
}
