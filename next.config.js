/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/homepage',
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
