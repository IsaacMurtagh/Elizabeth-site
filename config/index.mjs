import convict from 'convict';

// Define a schema
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
      default: 'Lilo Writing Blog',
      env: 'MARKETING_SITE_NAME'
    }
  }
});

config.validate({ allowed: 'strict' });

export default config;

