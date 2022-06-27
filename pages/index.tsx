import { MarkdownFile, fetchMarkdownFiles } from 'lib/markdown'
import { fetchMarkdownTags } from 'lib/tags'
import PageLayout from 'components/PageLayout'

interface Props {
  blogPosts: MarkdownFile[]
  snippets: MarkdownFile[]
  tags: string[]
}

export default function Index({ blogPosts, snippets, tags }: Props) {
  return (
    <PageLayout title="cathal.dev">
      <h1>About Me</h1>
      <p>{"Hi, I'm Cathal Mullan, a Software Engineer."}</p>
      <p>{'My interests include Rust, Python and Nix.'}</p>
      <p>{"This site will likely cover these topics in time, but for now it's a work in progress."}</p>

      {blogPosts.length > 0 && (
        <section>
          <h2>Blog Posts:</h2>
          <ul>
            {blogPosts.map(({ id, title }: MarkdownFile) => (
              <li key={id}>
                <a href={`/blog/${id}`}>{title}</a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {snippets.length > 0 && (
        <section>
          <h2>Snippets:</h2>
          <ul>
            {snippets.map(({ id, title }: MarkdownFile) => (
              <li key={id}>
                <a href={`/snippets/${id}`}>{title}</a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {tags.length > 0 && (
        <section>
          <h2>Tags:</h2>
          <ul>
            {tags.map((tag: string) => (
              <li key={tag}>
                <a href={`/tags/${tag}`}>{tag}</a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </PageLayout>
  )
}

export async function getStaticProps() {
  const blogPosts = fetchMarkdownFiles('blog')
  const snippets = fetchMarkdownFiles('snippets')
  const tags = fetchMarkdownTags()

  return {
    props: {
      blogPosts,
      snippets,
      tags,
    },
  }
}
