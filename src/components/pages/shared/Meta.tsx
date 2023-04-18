import Head from "next/head";

export default function Meta({
  title = "Rowvolution",
  description = "Rowvolution is a platform for recording historical records as they change within your company's data.",
  image = "https://rowvolution.io/logo-cover.png",
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="icon"
        type="image/ico"
        sizes="32x32"
        href={`/favicon.png`}
      />
      <link
        rel="icon"
        type="image/ico"
        sizes="16x16"
        href={`/favicon.png`}
      />
      <link rel="manifest" href="/site.webmanifest" />
      {/* <link
        rel="mask-icon"
        href={`${FAVICON_FOLDER}/safari-pinned-tab.svg`}
        color="#5bbad5"
      /> */}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content="/favicon.png"></meta>
      <meta property="og:title" content='Rowvolution' />
      <meta property="og:description" content='The Marketplace for Data Scientists and Engineers' />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rowvolution" />
      <meta name="twitter:creator" content="@rowvolution" />
      <meta
        name="twitter:title"
        content="Rowvolution - The Marketplace for Data Scientists and Engineers"
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}