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
    <PageLayout title="Cathal Mullan | Software Engineer">
      <RenderedMarkdown content={aboutMe.content} />

      <hr />

      <div>
        <h2>Latest Blog Posts</h2>
        <MarkdownCards markdownPages={blogPosts} />
      </div>

      <hr />

      <div>
        <h2>Latest Snippets</h2>
        <MarkdownCards markdownPages={snippets} />
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const aboutMe = fetchMarkdownFile("about-me.md");

  const blogPosts = fetchMarkdownFiles("blog")
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 6);

  const snippets = fetchMarkdownFiles("snippets")
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 6);

  return {
    props: {
      aboutMe,
      blogPosts,
      snippets,
    },
  };
}
