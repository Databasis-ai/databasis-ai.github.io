import Head from "next/head";
import { FAVICON_FOLDER } from "../utils/constants";

export default function Meta({
  title = "NicheAi - Automated advertising for niche businesses",
  description = "Nice AI is an advertising agency leveraging artificial intelligence to create perfect, automated ads suited for your specific business..",
  image = "https://niche-advertising.vercel.app/_static/logos/niche-logo.png",
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
        href={`/_static/logos/favicon-32x32.ico`}
      />
      <link
        rel="icon"
        type="image/ico"
        sizes="16x16"
        href={`/_static/logos/favicon-16x16.ico`}
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href={`${FAVICON_FOLDER}/safari-pinned-tab.svg`}
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content="https://niche-advertising.vercel.app/_static/logos/niche-logo.png"></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@esornona" />
      <meta name="twitter:creator" content="@esornona" />
      <meta
        name="twitter:title"
        content="Niche AI - Instant, Accurate Advertising"
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}