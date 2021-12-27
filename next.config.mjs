import config from './config/index.mjs';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      config.get('strapi.domain'),
    ]
  },
}

export default nextConfig;
