/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  experimental: {
    workerThreads: true,
    cpus: 2,
  },
};

module.exports = nextConfig;
