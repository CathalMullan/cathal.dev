export default function CommitLink() {
  return (
    <a href={`https://github.com/CathalMullan/cathal.dev/commit/${process.env.GIT_HASH}`} className="ml-6 block">
      {process.env.GIT_HASH}
    </a>
  )
}
