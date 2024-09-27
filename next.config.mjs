/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.crafto.app', 'C:\fakepathScreenshot'],
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript type errors during the build
  },
};

export default nextConfig;
