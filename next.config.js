/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    domains: ["cdn.discordapp.com", "media.discordapp.net"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
// module.exports = nextConfig;
