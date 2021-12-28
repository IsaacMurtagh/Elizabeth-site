import convict from 'convict';

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  strapi: {
    baseUrl: {
      format: String,
      default: 'https://author.lilowriting.com',
      env: 'STRAPI_BASE_URL'
    },
    domain: {
      format: String,
      default: 'author.lilowriting.com',
      env: 'STRAPI_DOMAIN'
    },
    imageDomain: {
      format: String,
      default: 'lilowriting-strapi-assets.s3.ap-southeast-2.amazonaws.com',
      env: 'STRAPI_IMAGE_DOMAIN'
    },
  },
  site: {
    name: {
      format: String,
      default: 'Lilo Writing Blog',
      env: 'BLOG_SITE_NAME'
    }
  },
  marketing: {
    name: {
      format: String,
      default: 'Lilo Writing',
      env: 'MARKETING_SITE_NAME'
    }
  }
});

config.validate({ allowed: 'strict' });

export default config;

