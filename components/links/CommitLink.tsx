export function CommitLink() {
  return (
    <a href={`https://github.com/CathalMullan/cathal.dev/commit/${process.env.GIT_HASH}`}>{process.env.GIT_HASH}</a>
  );
}
