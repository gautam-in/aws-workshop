import Head from 'next/head';

export default function Meta() {
  return (
    <Head>
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`My example blog.`} />
    </Head>
  );
}
