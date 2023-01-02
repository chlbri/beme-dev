/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    MEDIA_STACK_APIKEY: '31ecfc6b38fd81423c26b7a85730bd62',
    MEDIA_STACK_API_URL: 'http://api.mediastack.com/v1/news',
  },
};

module.exports = nextConfig;
