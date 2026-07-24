/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — produces web/out/ of plain files served by nginx/caddy.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
