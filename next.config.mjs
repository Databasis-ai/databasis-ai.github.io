!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

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

export default config;
