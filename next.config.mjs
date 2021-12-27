import config from './config/index.mjs';

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: config.get('strapi.baseUrl'),
  },
}

export default nextConfig;
