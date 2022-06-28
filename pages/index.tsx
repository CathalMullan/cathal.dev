import { MarkdownFile, fetchMarkdownFiles, fetchMarkdownFile } from 'lib/markdown'
import PageLayout from 'components/PageLayout'
import RenderedMarkdown from 'components/RenderedMarkdown'
import MarkdownCards from 'components/MarkdownCards'

interface Props {
  aboutMe: MarkdownFile
  blogPosts: MarkdownFile[]
  snippets: MarkdownFile[]
  tags: string[]
}

export default function Index({ aboutMe, blogPosts, snippets }: Props) {
  return (
    <PageLayout title="Cathal Mullan's Personal Site">
      <RenderedMarkdown content={aboutMe.content} />

      <MarkdownCards text="Latest Blog Posts" markdownFiles={blogPosts} />
      <MarkdownCards text="Latest Snippets" markdownFiles={snippets} />
    </PageLayout>
  )
}

export async function getStaticProps() {
  const aboutMe = fetchMarkdownFile('about-me.md')

  const blogPosts = fetchMarkdownFiles('blog')
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 5)

  const snippets = fetchMarkdownFiles('snippets')
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 5)

  return {
    props: {
      aboutMe,
      blogPosts,
      snippets,
    },
  }
}
