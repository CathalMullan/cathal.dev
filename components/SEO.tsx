import Head from "next/head";

interface Props {
  url: string;
  title: string;
  description: string;
  tags: string[];
}

export function SEO({ url, title, description, tags }: Props) {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={tags.join(", ")} />

      <meta property="og:site_name" content="cathal.dev" />
      <meta property="og:url" content={`https://cathal.dev/${url}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://cathal.dev/android-chrome-512x512.png" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Cathal_Dev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://cathal.dev/android-chrome-512x512.png" />
    </Head>
  );
}
