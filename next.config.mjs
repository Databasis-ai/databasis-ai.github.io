import nextMDX from '@next/mdx'
import { remarkPlugins } from './mdx/remark.mjs'
import { rehypePlugins } from './mdx/rehype.mjs'
import { recmaPlugins } from './mdx/recma.mjs'
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
    providerImportSource: '@mdx-js/react',
  },
})

const config = {
  images: {
    remotePatterns: [
      { hostname: 'www.google.com' }
    ],
    remotePatterns: [
      { hostname: 'avatar.vercel.sh' }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    scrollRestoration: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withMDX(config);
