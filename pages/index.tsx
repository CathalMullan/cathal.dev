import { MarkdownFile, fetchMarkdownFiles, fetchMarkdownFile, fetchMarkdownTags } from 'lib/markdown'
import PageLayout from 'components/PageLayout'
import RenderedMarkdown from 'components/RenderedMarkdown'
import MarkdownList from 'components/MarkdownList'
import TagList from 'components/TagList'

interface Props {
  aboutMe: MarkdownFile
  blogPosts: MarkdownFile[]
  snippets: MarkdownFile[]
  tags: string[]
}

export default function Index({ aboutMe, blogPosts, snippets, tags }: Props) {
  return (
    <PageLayout title="cathal.dev">
      <RenderedMarkdown content={aboutMe.content} />

      <MarkdownList title="Blog Posts" markdownFiles={blogPosts} />
      <MarkdownList title="Snippets" markdownFiles={snippets} />

      <TagList title="Tags" tags={tags} />
    </PageLayout>
  )
}

export async function getStaticProps() {
  const aboutMe = fetchMarkdownFile('about-me.md')
  const blogPosts = fetchMarkdownFiles('blog')
  const snippets = fetchMarkdownFiles('snippets')
  const tags = fetchMarkdownTags()

  return {
    props: {
      aboutMe,
      blogPosts,
      snippets,
      tags,
    },
  }
}
