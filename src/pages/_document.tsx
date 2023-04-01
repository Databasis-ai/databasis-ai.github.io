import Meta from '@/components/Meta'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Meta/>
      </Head>
      <body className="antialiased dark:bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
